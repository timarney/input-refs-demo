import { useCallback } from "react";
import { useRefsContext } from "./RefsContext";
import { Input } from "./Input";

interface Item {
  id: string;
  label: string;
}

export const Items = () => {
  const { refs } = useRefsContext();

  const items: Item[] = [
    { id: "85XC5Z8F33", label: "One" },
    { id: "UL4JS2P1RU", label: "Two" },
    { id: "C42YB8O3KO", label: "Three" },
    { id: "MUW6LMT0WG", label: "Four" },
    { id: "R4IVRK6CDC", label: "Five" },
  ];


  const handleFocusInput = useCallback(
    (id: string) => {
      refs && refs.current && refs.current[id as unknown as number].focus();
    },
    [refs]
  );

  return (
    <div>
      Items
      {items.map(({ id, label }) => {
        return (
          <Input
            id={id}
            key={id}
            handleFocusInput={handleFocusInput}
            placeHolder={label}
          />
        );
      })}
    </div>
  );
};
