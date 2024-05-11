import { Terminal, terminal} from "terminal-kit";
import { Entity } from "../entities/Entity";
import { Port } from "../ports/Ports";

export class TerminalKitAdapeter implements Port{

    private terminal: Terminal

    constructor(){
        this.terminal = terminal
    }

   displayTime(time: Entity): void {
        this.terminal.clear()
        this.terminal.cyan(time.toString()+'\n')   
    }
}