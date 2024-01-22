import { Reducer, createContext, useContext } from "react";


enum StateTypes {
    Open,
    Closed,
}

enum ActionTypes {
    SetId
}

type State = {
    state: StateTypes;
    id: string;
}

type Action = {
    type: ActionTypes.SetId;
    id: string;
}

const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.SetId:
            return { ...state, id: action.id };
        default:
            return state;
    }
}

const DialogContext = createContext<React.Dispatch<Action> | undefined>(undefined);

const useDialogContext = () => {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error("useDialogContext must be used within a DialogProvider");
    }

    return context;
}



export const Dialog = () => {
    return <div>Dialog</div>
}