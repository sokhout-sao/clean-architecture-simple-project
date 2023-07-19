export default class CarModel {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('CarModel value should not be empty');

    this.value = value;
  }

  static of(value: string): CarModel {
    return new CarModel(value);
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
