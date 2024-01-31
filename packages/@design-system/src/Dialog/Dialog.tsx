import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { Portal } from "../Portal/Portal"
import styled from "styled-components"



// dialog 상태
type DialogState = {
    isOpen: boolean;
    content: React.ReactNode;
}

// action type
type DialogAction =
    | { type: 'OPEN_DIALOG', content: React.ReactNode }
    | { type: 'CLOSE_DIALOG' }

// init state
const initialState: DialogState = {
    isOpen: false,
    content: null
}

const dialogReducer = (state: DialogState, action: DialogAction): DialogState => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { ...state, isOpen: true, content: action.content }
        case 'CLOSE_DIALOG':
            return { ...state, isOpen: false, content: null }
        default:
            return state;
    }
}


// dialog context
export const DialogContext = createContext<{
    state: DialogState;
    dispatch: React.Dispatch<DialogAction>;
}>({
    state: initialState,
    dispatch: () => { }
})

// provider
export const DialogProvider: React.FC = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(dialogReducer, initialState);

    return (
        <DialogContext.Provider value={{ state, dispatch }}>
            {children}
        </DialogContext.Provider>
    )
}
export const useDialogContext = () => {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error('DialogContext not found');
    }

    return context;
}





const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Dialog: React.FC = () => {
    const { state, dispatch } = useDialogContext();

    if (!state.isOpen) return null;

    return (
        <Portal>
            <DialogOverlay onClick={() => dispatch({ type: 'CLOSE_DIALOG' })}>
                <DialogContent onClick={(e: MouseEvent) => e.stopPropagation()}>
                    {state.content}
                </DialogContent>
            </DialogOverlay>
        </Portal>
    )
}