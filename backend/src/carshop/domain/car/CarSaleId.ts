export default class CarSaleId {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('CarSaleId value should not be empty');

    this.value = value;
  }

  static of(value: string): CarSaleId {
    return new CarSaleId(value);
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
