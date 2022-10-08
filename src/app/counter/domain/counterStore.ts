import { Counter } from "./counterEntity";
interface CounterStore {
  counter: Counter | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  loadInitialCounter(): Promise<Counter>;
  setCounter(counter: Counter): void;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

export type { CounterStore };
