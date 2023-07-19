export default class Instant {
  timestamp: number;

  constructor(timestamp: number) {
    this.timestamp = timestamp;
  }

  toJSON(): number {
    return this.timestamp;
  }

  toString(): string {
    return `${this.timestamp}`;
  }

  valueOf(): number {
    return this.timestamp;
  }
}
