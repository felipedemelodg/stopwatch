// import { ConsoleAdapter } from "./core/adapters/Adapters";
import { ConsoleAdapter } from "./core/adapters/ConsoleAdapters";
import { TerminalKitAdapeter } from "./core/adapters/TerminalKitAdapater";
import { Service } from "./core/services/Services";
import { UseCase } from "./core/usecase/UseCase";

export function stopwatchAppConsole() {
  const service = new Service();
  const useCase = new UseCase(service);
  const terminal = new TerminalKitAdapeter
  const console = new ConsoleAdapter
  useCase.start();
  setInterval(() => {
    const time = useCase.getTime();
    // terminal.displayTime(time);
    console.displayTime(time)
  }, 1000);
}
