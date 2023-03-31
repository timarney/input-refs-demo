import { useItemsContext } from "./ItemsContext";

export const Input = ({
  id,
  placeHolder,
  handleFocusInput,
}: {
  id: string;
  placeHolder: string;
  handleFocusInput: (id: string) => void;
}) => {
  const { refs } = useItemsContext();
  const getRef = (element: any) => {
    if (!refs || !refs.current || !element) {
      return null;
    }

    return (refs.current[id] = element);
  };
  return (
    <div className="input-wrapper">
      <input
        autoFocus={true}
        ref={getRef}
        placeholder={placeHolder}
        type="text"
      />
      <button
        onClick={() => {
          handleFocusInput(id);
        }}
      >
        {`focus - ${placeHolder}`}
      </button>
    </div>
  );
};
