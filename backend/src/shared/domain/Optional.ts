export class Optional<T> {
    private value?: T;

    private constructor(value?: T) {
        this.value = value;
    }

    static of<T>(value: T): Optional<T> {
        return new Optional(value);
    }

    static ofNullable<T>(value?: T): Optional<T> {
        return new Optional(value);
    }

    isPresent(): boolean {
        return this.value !== null && this.value !== undefined;
    }

    isEmpty(): boolean {
        return this.isPresent();
    }

    get(): T {
        if (this.isEmpty()) throw new Error('The optional is empty');

        return <T> this.value;
    }
}