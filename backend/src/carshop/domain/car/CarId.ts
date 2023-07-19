export default class CarId {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '') throw new Error('CarId value should not be empty');

    this.value = value;
  }

  static of(value: string): CarId {
    return new CarId(value);
  }

  toJSON(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  valueOf(): string {
    return this.value;
  }
}
