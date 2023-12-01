import { ReactNode, createContext, useReducer} from "react";
import { initThemeType, initThemeContextType } from "../Type";


const initTheme = {darkMode: false};
const initThemeContext: initThemeContextType = {
    state: initTheme,
    dispatch: () => {}
}

// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext(initThemeContext);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const themeReducer = (state:initThemeType, action:any) => {
    switch(action.type) {
        case "toggle":
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
}


export const ThemeContextProvider = (props: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(themeReducer,initTheme);

    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )

}
