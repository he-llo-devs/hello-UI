import { 
	CircleIcon, 
	GripIcon, 
	HomeIcon, 
	LayoutDashboardIcon,
	LoaderIcon,
	Paintbrush,
	PilcrowIcon,
	StretchHorizontalIcon
} from "lucide-react";

const MenuItems = () => {
	return [
		{
			section: 'Home',
			items: [
				{
					name: 'Overview',
					path: '/overview',
					icon: HomeIcon
				}
			]
		},
		{
			section: 'Design System',
			items: [
				{
					name: 'Typography',
					path: '/design-system/typography',
					icon: PilcrowIcon
				},
				{
					name: 'Colors',
					path: '/design-system/color',
					icon: Paintbrush
				},
				{
					name: 'Spacing',
					path: '/design-system/spacing',
					icon: LayoutDashboardIcon
				},
				{
					name: 'Shadows',
					path: '/design-system/shadows',
					icon: LoaderIcon
				},
				{
					name: 'Borders',
					path: '/design-system/borders',
					icon: StretchHorizontalIcon
				},
				{
					name: 'Opacity',
					path: '/design-system/opacity',
					icon: GripIcon
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