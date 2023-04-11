import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
	const { theme, switchTheme } = useTheme();

	return (
		<button onClick={() => switchTheme()}>
			{ theme == "dark" 
				? <Moon size={16}/>                
				: <Sun size={16}/>
			}
		</button>
        
	);
};

export default ThemeButton;
