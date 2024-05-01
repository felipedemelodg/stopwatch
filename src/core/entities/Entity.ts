export class Entity {
  constructor(
    private hours: number,
    private minutes: number,
    private seconds: number
  ) {}

  static pad(num: number): string {
    return (num < 10 )? "0" + num : num.toString();
  }
  toString(): string {
    return (
      Entity.pad(this.hours) +
      ":" +
      Entity.pad(this.minutes) +
      ":" +
      Entity.pad(this.seconds)
    );
  }
}
