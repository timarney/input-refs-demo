import { useItemsContext } from "./ItemsContext"

export const Input = ({
    id,
    placeHolder,
    handleFocusInput,
}: {
    id: number;
    placeHolder: string;
    handleFocusInput: (id: number) => void;
}) => {
    const { refs } = useItemsContext();
    const getRef = (element: any) => {
        if (!refs || !refs.current || !element) {
            return null;
        }

        return (refs.current[id] = element);
    }
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
                {`Focus # ${id}`}
            </button>
        </div>
    );
};