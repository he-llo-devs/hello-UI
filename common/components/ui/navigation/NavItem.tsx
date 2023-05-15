import { HomeIcon } from "lucide-react";

// isExpanded instead of true
const NavItem = () => {
	return (
		<div className="my-4">
			<div className="group c-nav-item">
				<HomeIcon className="c-nav-item-icon"/>
				{true ? <span>Resumen</span> : null} 
			</div>
		</div>
	);
};
 
export default NavItem;