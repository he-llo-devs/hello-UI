import { ChevronDownIcon, MenuIcon, PalmtreeIcon, XIcon } from "lucide-react";
import { FC, MouseEvent, useState } from "react";

interface Props {
	handleCollapse: Function;
	isMenuCollapsed: boolean;
}

const Sidebar: FC<Props> = ({isMenuCollapsed, handleCollapse}) => {
	const [isExpanded, setIsExpanded] = useState(true);

	const [dropdown, setDropdown] = useState({
		activeItem: '',
		activeClass: 'bg-gray-800 text-gray-200',
		expandedClass: 'border-l border-gray-200 ml-4 pl-4',
		shrinkedClass: 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-white sm:rounded-lg sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-48 dark:bg-gray-800',
	});

	const handleisExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	const handleDropdown = (e: MouseEvent) => {
		if(dropdown.activeItem == e.currentTarget.id) {
			setDropdown({
				...dropdown,
				activeItem: ''
			});
			return;
		}

		setDropdown({
			...dropdown,
			activeItem: e.currentTarget.id
		});
	};

	return (
		<div className={`c-sidebar ${isMenuCollapsed ? "" : "-translate-x-full"} ${isExpanded ? 'w-10/12 md:w-64' : 'w-20'}`}>
			<div className="c-sidebar-header">
				<h4 className={`whitespace-nowrap flex ${isExpanded ? "space-x-2" : ""}`}>
					<PalmtreeIcon/> 
					<span className="font-semibold">{isExpanded ? "Hello UI": ""}</span>
				</h4>
				<button onClick={ () => handleCollapse() } className="md:hidden">
					{ isMenuCollapsed 
						? <XIcon/>
						: <MenuIcon/>
					}
				</button>
			</div>
					
			{/*Sidebar toggle*/}
			<button className="c-sidebar-toggle-button" onClick={handleisExpanded}>
				<ChevronDownIcon size={16} className={`c-sidebar-toggle-icon ${isExpanded ? 'rotate-90' : '-rotate-90'}`}/>
			</button>
		</div>
	);
};
 
export default Sidebar;