export default class Price {
  private value!: number;

  private constructor(value: number) {
    if (value <= 0)
      throw new Error('Price value should not be strictly positive');

    this.value = value;
  }

  static of(value: number): Price {
    return new Price(value);
  }

  toJSON(): number {
    return this.value;
  }

  toString(): string {
    return `${this.value}`;
  }

  valueOf(): number {
    return this.value;
  }
}
