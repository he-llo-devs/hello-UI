import { ReactNode, FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
	children: ReactNode;
}

const SideBarLayout: FC<Props> = ({ children }) => {
	return (
		<div className="flex max-w-384 mx-auto">
			<Sidebar/>
			<div className="w-full px-10 flex flex-col justify-between">
				<Header/>
				<main className="grow min-h-screen md:min-h-0">
					{children}
				</main>
				<Footer/>
			</div>
		</div>
	);
};
 
export default SideBarLayout;