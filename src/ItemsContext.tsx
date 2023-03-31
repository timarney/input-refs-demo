import React, { createContext, useState, useContext, useRef, RefObject } from "react";

interface Item {
  id: number;
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
    { id: 1, label: "One" },
    { id: 2, label: "Two" },
    { id: 3, label: "Three" },
    { id: 4, label: "Four" },
  ]

  return (
    <ItemsContext.Provider value={{ items, refs }}>
      {children}
    </ItemsContext.Provider>
  );
}

export const useItemsContext = () => useContext(ItemsContext);
