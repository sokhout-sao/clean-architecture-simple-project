export default class UserPassword {
  private value!: string;

  private constructor(value: string) {
    if (value.trim() === '')
      throw new Error('UserPassword value should not be empty');
    if (value.length < 8)
      throw new Error(
        'UserPassword value should contain at least 8 characters',
      );

    this.value = value;
  }

  static of(value: string): UserPassword {
    return new UserPassword(value);
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
