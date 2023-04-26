import ExamplePicture from "@/public/images/example-picture.png";

import Avatar from "../avatars/Avatar";
import ThemeButton from "../theme/Theme";

const Header = () => {
	return (
		<div className="h-20 flex justify-between items-center">
			<div>
			</div>
                
			<div className="flex items-center space-x-4 border-l pl-4">
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