import { create } from "zustand";
import createModalSlice, { IModal } from "./modalSlice";
import createCounterSlice, { ICounter } from "./counterSlice";
import { devtools } from "zustand/middleware";

export const useStore = create<IModal & ICounter>()(
  devtools((...a) => ({
    ...createModalSlice(...a),
    ...createCounterSlice(...a),
  }))
);
