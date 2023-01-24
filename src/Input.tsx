export const Input = ({
    refs,
    id,
    placeHolder,
    handleFocusInput,
}: {
    refs: any;
    id: number;
    placeHolder: string;
    handleFocusInput: (id: number) => void;
}) => {
    const getRef = (element: any) =>
        element ? (refs.current[id] = element) : null;
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