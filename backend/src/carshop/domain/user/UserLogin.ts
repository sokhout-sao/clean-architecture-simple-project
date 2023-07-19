export default class UserLogin {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('UserLogin value should not be empty');

    this.value = value;
  }

  static of(value: string): UserLogin {
    return new UserLogin(value);
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
