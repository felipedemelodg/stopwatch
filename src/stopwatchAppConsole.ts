import { ConsoleAdapter } from "./core/adapters/Adapters";
import { Service } from "./core/services/Services";
import { UseCase } from "./core/usecase/UseCase";

export function stopwatchAppConsole() {
  const service = new Service();
  const useCase = new UseCase(service);
  const consoleAdapter = new ConsoleAdapter();
  useCase.start();
  setInterval(() => {
    const time = useCase.getTime();
    consoleAdapter.displayTime(time);
  }, 1000);
}
