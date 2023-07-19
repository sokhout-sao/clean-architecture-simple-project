export default class UserId {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('UserId value should not be empty');

    this.value = value;
  }

  static of(value: string): UserId {
    return new UserId(value);
  }

  toJSON() {
    return this.value;
  }

  toString() {
    return this.value;
  }

  valueOf(): string {
    return this.value;
  }
}
