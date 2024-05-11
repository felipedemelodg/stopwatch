// import { ConsoleAdapter } from "./core/adapters/Adapters";
import { TerminalKitAdapeter } from "./core/adapters/TerminalKitAdapater";
import { Service } from "./core/services/Services";
import { UseCase } from "./core/usecase/UseCase";

export function stopwatchAppConsole() {
  const service = new Service();
  const useCase = new UseCase(service);
  const terminal = new TerminalKitAdapeter
  useCase.start();
  setInterval(() => {
    // console.clear()
    const time = useCase.getTime();
    terminal.displayTime(time);
  }, 1000);
}
