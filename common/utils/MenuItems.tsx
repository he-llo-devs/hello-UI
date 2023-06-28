import { 
	CircleIcon, 
	HomeIcon 
} from "lucide-react";

const MenuItems = () => {
	return [
		{
			section: 'Dashboard',
			items: [
				{
					name: 'Overview',
					path: '/',
					icon: HomeIcon
				}
			]
		},
		{
			section: 'Components',
			items: [
				{
					name: 'Alert',
					path: '/components/alert',
					icon: CircleIcon
				},
				{
					name: 'Avatar',
					path: '/components/avatar',
					icon: CircleIcon
				},
				{
					name: 'Button',
					path: '/components/button',
					icon: CircleIcon
				},
				{
					name: 'Button',
					path: '/components/button',
					icon: CircleIcon
				},
				{
					name: 'Input',
					path: '/components/input',
					icon: CircleIcon
				},
				{
					name: 'Card',
					path: '/components/card',
					icon: CircleIcon
				}
			]
		},
	];
};
 
export default MenuItems;