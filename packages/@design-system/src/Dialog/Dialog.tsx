import { PropsWithChildren, Reducer, createContext, useContext, useReducer } from "react";
import { Portal } from "../Portal/Portal";


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



export const Dialog = ({children}: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, { state: StateTypes.Closed, id: ''});
    
    return ( 
        <DialogContext.Provider value={dispatch}>
            <Portal>
               {children}
            </Portal>
        </DialogContext.Provider>
    )
}