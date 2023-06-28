import { ChevronDownIcon, MenuIcon, PalmtreeIcon, XIcon } from "lucide-react";
import { FC, Fragment, MouseEvent, useState } from "react";
import NavItem from "../navigation/NavItem";
import MenuItems from "@/utils/MenuItems";

interface Props {
	handleCollapse: Function;
	handleExpanded: Function;
	isMenuCollapsed: boolean;
	isExpanded: boolean;
}

const Sidebar: FC<Props> = ({isMenuCollapsed, handleCollapse, isExpanded, handleExpanded}) => {
	const menu = MenuItems();

	return (
		<div className={`c-sidebar ${isMenuCollapsed ? "" : "-translate-x-full"} ${isExpanded ? 'w-10/12 md:w-80' : 'w-32'}`}>
			<div className={`c-sidebar-header ${!isExpanded ? "md:justify-center" : ""}`}>
				<h4 className={`whitespace-nowrap flex text-xl ${isExpanded ? "space-x-2" : ""}`}>
					<PalmtreeIcon size={28}/> 
					<span className="font-semibold">{isExpanded ? "Hello UI": ""}</span>
				</h4>
				<button onClick={() => handleCollapse()} className="md:hidden">
					{ isMenuCollapsed 
						? <XIcon/>
						: <MenuIcon/>
					}
				</button>
			</div>
					
			<button className="c-sidebar-toggle-button" onClick={() => handleExpanded()}>
				<ChevronDownIcon size={16} className={`c-sidebar-toggle-icon ${isExpanded ? 'rotate-90' : '-rotate-90'}`}/>
			</button>

			<div className="c-sidebar-navigation">
				<div className={!isExpanded ? "flex flex-col items-center" : ""}>
					{ menu.map((element, idx) => (
						<Fragment key={idx}>
							<span className="text-zinc-500 dark:text-zinc-400">{ element.section }</span>
							<div className="my-4">
								{ element.items.map((item, idx) => (
									<NavItem key={idx} isExpanded={ isExpanded } label={item.name} Icon={item.icon} url={item.path}/>
								))}
							</div>
						</Fragment>
					))}
				</div>
			</div>

			<div>

			</div>
		</div>
	);
};
 
export default Sidebar;