import { useRefsContext } from "./RefsContext";

export const Input = ({
  id,
  placeHolder,
  handleFocusInput,
}: {
  id: string;
  placeHolder: string;
  handleFocusInput: (id: string) => void;
}) => {
  const { refs } = useRefsContext();
  const getRef = (element: any) => {
    if (!refs || !refs.current || !element) {
      return null;
    }

    return (refs.current[id as unknown as number] = element);
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
