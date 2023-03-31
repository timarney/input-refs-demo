import React, { createContext, useContext, useRef, RefObject } from "react";

interface Item {
  id: string;
  label: string;
}

interface ItemsContextType {
  refs?: RefObject<HTMLInputElement[]> | undefined;
  items: Item[];
}

const defaults: ItemsContextType = {
  items: [],
};

const ItemsContext = createContext<ItemsContextType>(defaults);

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const refs = useRef<HTMLInputElement[]>([]);
  const items = [
    { id: "85XC5Z8F33", label: "One" },
    { id: "UL4JS2P1RU", label: "Two" },
    { id: "C42YB8O3KO", label: "Three" },
    { id: "MUW6LMT0WG", label: "Four" },
    { id: "R4IVRK6CDC", label: "Five" },
  ];

  return (
    <ItemsContext.Provider value={{ items, refs }}>
      {children}
    </ItemsContext.Provider>
  );
}

export const useItemsContext = () => useContext(ItemsContext);
