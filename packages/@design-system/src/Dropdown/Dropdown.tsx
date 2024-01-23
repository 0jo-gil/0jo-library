import React, { createContext, useReducer, useContext, Reducer, PropsWithChildren } from 'react';

enum ActionTypes {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
    SELECT = 'SELECT',
    CHANGE = 'CHANGE',
}

type State = {
    value: unknown;
    isOpen: boolean;
    disabled: boolean;
};

type Action<T = unknown> = {
    type: ActionTypes;
    value?: T;
    id?: string;
};

const dropdownActionContext = createContext<React.Dispatch<Action> | undefined>(undefined);
const dropdownStateContext = createContext<State | undefined>(undefined);

const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.OPEN:
            return { ...state, isOpen: true };
        case ActionTypes.CLOSE:
            return { ...state, isOpen: false };
        case ActionTypes.SELECT:
            return { ...state, value: action.id };
        case ActionTypes.CHANGE:
            return { ...state, value: action.value };
        default:
            return state;
    }
};

export const DropdownProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, { value: '', isOpen: false, disabled: false });

    return (
        <dropdownActionContext.Provider value={dispatch}>
            <dropdownStateContext.Provider value={state}>
                {children}
            </dropdownStateContext.Provider>
        </dropdownActionContext.Provider>
    );
};

export const useDropdownAction = () => {
    const context = useContext(dropdownActionContext);
    if (!context) {
        throw new Error("useDropdownAction must be used within a DropdownProvider");
    }
    return context;
};

export const useDropdownDispatch = () => {
    const context = useContext(dropdownActionContext);
    if (!context) {
        throw new Error("useDropdownDispatch must be used within a DropdownProvider");
    }
    return context;
};

export const useDropdownState = () => {
    const context = useContext(dropdownStateContext);
    if (!context) {
        throw new Error("useDropdownState must be used within a DropdownProvider");
    }
    return context;
};

const Dropdown = ({ children }: PropsWithChildren) => {
    return <DropdownProvider>{children}</DropdownProvider>;
};

Dropdown.Trigger = ({ children }: PropsWithChildren) => {
    const { isOpen } = useDropdownState();
    const dispatch = useDropdownDispatch();

    const handleClick = () => {
        dispatch({ type: isOpen ? ActionTypes.CLOSE : ActionTypes.OPEN });
    };

    return <button onClick={handleClick}>{children}</button>;
};

Dropdown.Item = ({ children, value }: {
    children: React.ReactNode;
    value: string;
}) => {
    const { value: selectedValue } = useDropdownState();
    const dispatch = useDropdownDispatch();

    const handleClick = () => {
        dispatch({ type: ActionTypes.SELECT, id: value });
    };

    return (
        <div onClick={handleClick} style={{ backgroundColor: selectedValue === value ? 'gray' : 'white' }}>
            {children}
        </div>
    );
};

Dropdown.Menu = ({ children }: PropsWithChildren) => {
    const { isOpen } = useDropdownState();

    return isOpen ? <div>{children}</div> : null;
};

export default Dropdown;