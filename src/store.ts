import { createStore, type Action } from "redux";

export type State = {
    sadCount: number;
    happyCount: number;
}

const initialState: State = {
    sadCount: 0,
    happyCount: 0
}

const reducer = (currentState: State = initialState, action: Action): State => {
    if (action.type === "happy button clicked") {
        return { ...currentState, happyCount: currentState.happyCount + 1 };
    } else if (action.type === "sad button clicked") {
        return { ...currentState, sadCount: currentState.sadCount + 1 };
    } else if (action.type === "sad clear button clicked") {
        return { ...currentState, sadCount: 0 };
    } else if (action.type === "happy clear button clicked") {
        return { ...currentState, happyCount: 0 };
    } else {
        return currentState;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()); //createStore is deprecated
export default store;
