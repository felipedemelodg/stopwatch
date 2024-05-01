import { Entity } from "../entities/Entity";
import { Port } from "../ports/Ports";

export class ConsoleAdapter implements Port{
    displayTime(time: Entity): void {
        console.log(time.toString())
    }
}