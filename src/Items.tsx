import { useCallback } from "react";
import { useItemsContext } from "./ItemsContext";
import { Input } from "./Input"

export const Items = () => {
  const { items, refs } = useItemsContext();
  const handleFocusInput = useCallback(
    (id: number) => {
      refs && refs.current && refs.current[id].focus();
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
