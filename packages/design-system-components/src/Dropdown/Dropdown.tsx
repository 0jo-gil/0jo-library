import { createContext, useContext, useReducer } from "react";

type Action = {type: 'OPEN'} | {type: 'CLOSE'} | {type: 'SELECT', id: string} | {type: 'CHANGE', value: unknown};
type State = {value: unknown; isOpen: boolean; disabled: boolean};

const dropdownActionContext = createContext<{
    onOpen(): void;
    onClose(): void;
    onChange(value: unknown): void;
    onSelect(id: string): void;
} | null>(null);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'OPEN':
            return { ...state, isOpen: true };
        case 'CLOSE':
            return { ...state, isOpen: false };
        case 'SELECT':
            return { ...state, value: action.id };
        case 'CHANGE':
            return { ...state, value: action.value };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const useDropboxAction = () => {
    const context = useContext(dropdownActionContext);
    if (!context) {
        throw new Error("useDropbox must be used within a DropboxProvider");
    }

    return context;
}

const dropdownStateContext = createContext<{
    value: unknown;
    isOpen: boolean;
    disabled: boolean;
} | null>(null);


const useDropboxState = () => {
    const context = useContext(dropdownStateContext);
    if(!context) {
        throw new Error("useDropbox must be used within a DropboxProvider");
    }

    return context
}

const Dropdownbox = () => {

}


const reducer = () => {

}

const [state, dispatch] = useReducer()

