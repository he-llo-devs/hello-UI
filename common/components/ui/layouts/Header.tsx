import ExamplePicture from "@/public/images/example-picture.png";
import { FC } from "react";

import Avatar from "../avatars/Avatar";
import ThemeButton from "../theme/Theme";

import { MenuIcon, XIcon } from "lucide-react";

interface Props {
	handleCollapse: Function;
	isMenuCollapsed: boolean;
}

const Header: FC<Props> = ({ handleCollapse, isMenuCollapsed }) => {

	return (
		<div className="h-20 flex justify-between items-center">
			<div>
				<button onClick={ () => handleCollapse() } className="z-50">
					{ isMenuCollapsed 
						? <XIcon/>
						: <MenuIcon/>
					}
				</button>
			</div>
                
			<div className="flex items-center space-x-4 md:border-l pl-4 border-zinc-200 dark:border-zinc-800">
				<ThemeButton/>
				<div className="flex flex-col text-right">
					<span className="text-sm">José Baquerizo</span>
					<span className="text-xs">Admin</span>
				</div>
				<Avatar src={ExamplePicture} avatarFallback="JB" quality={100}/>
			</div>
		</div>
	);};
 
export default Header;