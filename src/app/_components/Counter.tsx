"use client";

import { useStore } from "@/lib/zustand/useStore";
import BTN from "@mui/material/Button";

const Counter = () => {
  const counter = useStore((state) => state.counter);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);

  return (
    <>
      <div>Counter: {counter}</div>
      <div>
        <BTN
          variant="contained"
          color="success"
          size="small"
          onClick={increase}
        >
          Increase
        </BTN>
         
        <BTN
          variant="contained"
          // variant="outlined"
          color="error"
          size="small"
          onClick={decrease}
        >
          Decrease
        </BTN>
      </div>
    </>
  );
};

export default Counter;
