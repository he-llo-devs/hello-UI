import { useNonInitialEffect } from "@/hooks/useNonInitialEffect";
import { useState, useEffect, createContext, FC, ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
	switchTheme: Function;
	theme?: Theme;
}

type Theme = "light" | "dark";

const ThemeContext = createContext<ThemeContextProps>(null!);

const ThemeProvider: FC<ThemeProviderProps>  = ({ children }) => {
	const [theme, setTheme] = useState<Theme>();

	useEffect(() => {
		const storagedTheme = localStorage.getItem("theme");
		const isThemeValid = (storagedTheme === "light" || storagedTheme === "dark");
		
		if(isThemeValid) {
			setTheme(storagedTheme);
			return;
		}

		setTheme("light");
	}, []);

	useEffect(() => {
		if(theme) {
			const root = window.document.documentElement;
	
			if(theme == "light") root.classList.remove("dark");
			if(theme == "dark") root.classList.add("dark");
			
			localStorage.setItem("theme", theme ?? "light");
		}
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