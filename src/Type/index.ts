
export interface initThemeType  {
    darkMode: boolean,
}

export interface initThemeContextType  {
    state: initThemeType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: any,
}