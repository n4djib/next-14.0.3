import { StateCreator } from "zustand";

export interface ICounter {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const createCounterSlice: StateCreator<ICounter> = (set, get, api) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  decrease: () => set((state) => ({ counter: state.counter - 1 })),
});

export default createCounterSlice;
