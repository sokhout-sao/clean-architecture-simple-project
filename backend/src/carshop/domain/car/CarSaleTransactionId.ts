export default class CarSaleTransactionId {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('CarSaleTransactionId value should not be empty');

    this.value = value;
  }

  static of(value: string): CarSaleTransactionId {
    return new CarSaleTransactionId(value);
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
