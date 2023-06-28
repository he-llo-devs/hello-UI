import { CircleIcon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
	isExpanded: boolean;
	label: string;
	url?: string;
	Icon?: LucideIcon;
}

const NavItem: FC<Props> = ({ isExpanded, label, Icon, url = '#' }) => {
	const router = useRouter();

	return (
		<Link href={url} className={`group c-nav-item ${router.pathname.includes(url) ? 'c-nav-item-active' : ''}`}>
			{Icon ? <Icon className={`c-nav-item-icon ${router.pathname.includes(url) ? 'c-nav-item-icon-active' : ''}`}/> : <CircleIcon className="c-nav-item-icon"/>}
			{isExpanded ? <span>{label}</span> : null} 
		</Link>
	);
};
 
export default NavItem;