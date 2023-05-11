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
		<div className="c-header">
			<div className="c-header-left-side">
				<button onClick={ () => handleCollapse() } className="md:hidden z-50">
					{ isMenuCollapsed 
						? <XIcon/>
						: <MenuIcon/>
					}
				</button>
			</div>
                
			<div className="c-header-right-side">
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