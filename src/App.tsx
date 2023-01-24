import { useCallback, useRef } from "react";
import "./App.css";

import { Input } from "./Input";

function App() {
  const refs = useRef<HTMLInputElement[]>([]);
  const items = [
    { id: 1, label: "One" },
    { id: 2, label: "Two" },
    { id: 3, label: "Three" },
  ];

  const handleFocusInput = useCallback(
    (id: number) => {
      refs.current[id].focus();
    },
    [refs]
  );

  return (
    <div className="App">
      <div>
        {items.map(({ id, label }) => {
          return (
            <Input
              id={id}
              key={id}
              handleFocusInput={handleFocusInput}
              refs={refs}
              placeHolder={label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
