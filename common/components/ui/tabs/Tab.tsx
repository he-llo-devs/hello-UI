import { Tab as Tabs } from "@headlessui/react";
import { ReactNode } from "react";

type SupportedStyles = 'default' | 'minimal'

interface Props {
	children: ReactNode;
	className?: string;
}

interface PropsWithStyles extends Props {
	style?: SupportedStyles
}

let selectedStyle: SupportedStyles = 'default';

const config = {
	default: {
		group: {
			className: 'c-tab-item',
			selected: 'c-tab-item-selected',
			noSelected: 'c-tab-item-no-selected'
		},
		list: {
			className: 'c-tab-list'
		},
		panels: {
			className: 'c-tab-panels'
		}
	},
	minimal: {
		group: {
			className: 'c-tab-item-minimal',
			selected: 'c-tab-item-selected-minimal',
			noSelected: 'c-tab-item-no-selected-minimal'
		},
		list: {
			className: 'c-tab-list-minimal'
		},
		panels: {
			className: 'c-tab-panels-minimal'
		}
	}
};


const Tab = ({className, children}: Props) => {
	return (
		<Tabs className={({ selected }) => (`${config[selectedStyle].group.className} ${selected ? config[selectedStyle].group.selected : config[selectedStyle].group.noSelected} ${className}`)}>
			{children}
		</Tabs>
	);
};

const Group = ({style, children}: PropsWithStyles) => {
	selectedStyle = style || 'default';

	return (
		<Tabs.Group>
			{children}
		</Tabs.Group>
	);
};

const List = ({className, children}: Props) => {
	return (
		<Tabs.List className={`${config[selectedStyle].list.className} ${className}`}>
			{children}
		</Tabs.List>
	);
};

const Panels = ({className, children}: Props) => {
	return (
		<Tabs.Panels className={`${config[selectedStyle].panels.className} ${className}`}>
			{children}
		</Tabs.Panels>
	);
};

const Panel = ({className, children}: Props) => {
	return (
		<Tabs.Panel className={`c-tab-panel ${className}`}>
			{children}
		</Tabs.Panel>
	);
};

const defaultProps = {
	className: ''
};

const defaultPropsWithStyle = {
	className: '',
	style: 'default'
};

Group.defaultProps = defaultPropsWithStyle;
Tab.defaultProps = defaultProps;
List.defaultProps = defaultProps;
Panel.defaultProps = defaultProps;
Panels.defaultProps = defaultProps;

Tab.Group = Group;
Tab.List = List;
Tab.Panel = Panel;
Tab.Panels = Panels;

export default Tab;