import { Entity } from "../entities/Entity";

export interface ServiceInterface {
  start(): void;
  stop(): void;
  reset(): void;
  getTime(): Entity;
}

export class Service implements ServiceInterface {
  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;
  private timeInterval: any;

  start(): void {
    this.timeInterval = setInterval(() => this.updateTime(), 1000);
  }
  stop(): void {
    clearInterval(this.timeInterval);
  }
  reset(): void {
    clearInterval(this.timeInterval);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  getTime(): Entity {
    return new Entity(this.hours, this.minutes, this.seconds);
  }

  private updateTime(): void {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
  }
}
