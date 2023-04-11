import { useState, useEffect, createContext, FC, ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
	theme: Theme;
	switchTheme: Function;
}

type Theme = "light" | "dark";

const ThemeContext = createContext<ThemeContextProps>(null!);

const ThemeProvider: FC<ThemeProviderProps>  = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const storagedTheme = localStorage.getItem("theme");
		const isThemeValid = (storagedTheme === "light" || storagedTheme === "dark");
		
		if(isThemeValid) setTheme(storagedTheme);
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		if(theme == "light") root.classList.remove("dark");
		if(theme == "dark") root.classList.add("dark");
		
		localStorage.setItem("theme", theme);
	}, [theme]);

	const switchTheme = () => {
		if(theme == "light") setTheme("dark");
		if(theme == "dark") setTheme("light");
	};

	return (
		<ThemeContext.Provider value={{
			theme: theme,
			switchTheme 
		}}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider }; 
export default ThemeContext;