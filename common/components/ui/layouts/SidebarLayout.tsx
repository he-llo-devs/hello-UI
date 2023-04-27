import { ReactNode, FC, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
	children: ReactNode;
}

const SideBarLayout: FC<Props> = ({ children }) => {
	const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);
	
	const handleCollapse = () => {
		setIsMenuCollapsed(!isMenuCollapsed);
	};

	return (
		<div className="flex max-w-384 mx-auto">
			<Sidebar isMenuCollapsed={isMenuCollapsed}/>
			<div className="w-full px-10 flex flex-col justify-between">
				<Header handleCollapse={ handleCollapse } isMenuCollapsed={isMenuCollapsed}/>
				<main className="grow min-h-screen md:min-h-0">
					{children}
				</main>
				<Footer/>
			</div>
		</div>
	);
};
 
export default SideBarLayout;