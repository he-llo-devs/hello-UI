import { ReactNode, FC, useState, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
	children: ReactNode;
}

const SideBarLayout: FC<Props> = ({ children }) => {
	const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);
	const [screenWidth, setScreenWidth] = useState<number>(typeof window != "undefined" ? window.innerWidth : 0);

	useEffect(() => {
		const handleWindowResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	useEffect(() => {
		if(screenWidth > 768) setIsMenuCollapsed(true);
	}, [screenWidth]);

	const handleCollapse = () => {
		setIsMenuCollapsed(!isMenuCollapsed);
	};

	return (
		<div className="block md:flex max-w-384 mx-auto">
			<Sidebar handleCollapse={handleCollapse} isMenuCollapsed={isMenuCollapsed}/>
			<div className="w-full px-5 md:px-10 flex flex-col justify-between">
				<Header handleCollapse={handleCollapse} isMenuCollapsed={isMenuCollapsed}/>
				<main className="grow min-h-screen md:min-h-0">
					{children}
				</main>
				<Footer/>
			</div>
		</div>
	);
};
 
export default SideBarLayout;