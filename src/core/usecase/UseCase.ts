import { Entity } from "../entities/Entity";
import { Service } from "../services/Services";

export interface UseCaseInterface {
  start(): void;
  stop(): void;
  reset(): void;
  getTime(): Entity;
}

export class UseCase implements UseCaseInterface {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  start(): void {
    this.service.start()
  }
  stop(): void {
    this.service.stop()
  }
  reset(): void {
    this.service.reset()
  }
  getTime(): Entity {
    return this.service.getTime()
  }
}
