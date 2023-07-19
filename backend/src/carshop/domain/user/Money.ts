export default class Money {
  private value!: number;

  private constructor(value: number) {
    if (value <= 0)
      throw new Error('Price value should not be strictly positive');

    this.value = value;
  }

  static of(value: number): Money {
    return new Money(value);
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

  add(value: number) {
    return new Money(this.value + value);
  }

  minus(value: number) {
    return new Money(this.value - value);
  }
}
