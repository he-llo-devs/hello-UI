import { Tab as Tabs } from "@headlessui/react";
import { ReactNode, useState } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const Tab = ({className, children}: Props) => {
	return (
		<Tabs className={({ selected }) => (`c-tab-item ${selected ? 'c-tab-item-selected' : 'c-tab-item-no-selected'} ${className}`)}>
			{children}
		</Tabs>
	);
};

const Group = ({className, children}: Props) => {
	return (
		<Tabs.Group>
			{children}
		</Tabs.Group>
	);
};

const List = ({className, children}: Props) => {
	return (
		<Tabs.List className={`c-tab-list ${className}`}>
			{children}
		</Tabs.List>
	);
};

const Panels = ({className, children}: Props) => {
	return (
		<Tabs.Panels className={`c-tab-panels ${className}`}>
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

Tab.defaultProps = defaultProps;
Group.defaultProps = defaultProps;
List.defaultProps = defaultProps;
Panel.defaultProps = defaultProps;
Panels.defaultProps = defaultProps;

Tab.Group = Group;
Tab.List = List;
Tab.Panel = Panel;
Tab.Panels = Panels;

export default Tab;