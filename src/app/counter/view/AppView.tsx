import React from "react";

import { useCounterViewModel } from "../controller/counterViewModel";
import { useCounterStoreImplementation } from "../data/counterStoreImplementation";

const CounterView = () => {
  const store = useCounterStoreImplementation();

  const {
    count,
    canDecrement,
    isLoading,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div className="App">
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <>
          <button onClick={decrementCounter} disabled={!canDecrement}>
            dec
          </button>
          <div>{count}</div>
          <button onClick={incrementCounter}>inc</button>
        </>
      )}
    </div>
  );
};

export default CounterView;
