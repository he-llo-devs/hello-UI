import { ChevronDownIcon } from "lucide-react";
import { MouseEvent, useState } from "react";

const Sidebar = () => {
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
		<div className="h-screen sticky border-r top-0 z-30">
			<div className={`hidden md:flex md:flex-col md:justify-between h-full bg-white dark:bg-gray-800 transition-all duration-300 space-y-2 ${isExpanded ? ' w-60' : 'w-60 sm:w-20'} ${!isExpanded ? 'top-0 -left-64 sm:left-0' : null}`}>
				<div className="min-h-[80px] flex items-center">
					<h4 className="whitespace-nowrap">✨ {isExpanded ? "Hello UI": ""}</h4>
				</div>
                
				{/*Sidebar toggle*/}
				<button className="absolute focus:outline-none -right-3 top-14 bg-gray-800 dark:bg-gray-700 rounded-full shadow-md w-6 h-6 flex items-center justify-center" onClick={handleisExpanded}>
					<ChevronDownIcon size={16} className={`transition-all duration-300 transform text-white ${isExpanded ? 'rotate-90' : '-rotate-90'}`}/>
				</button>
			</div>
		</div>
	);
};
 
export default Sidebar;