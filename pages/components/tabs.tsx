import { useState } from "react";
import Head from "next/head";
import SideBarLayout from "@/ui/layouts/SidebarLayout";
import Card from "@/ui/cards/Card";
import Tab from "@/ui/tabs/Tab";

const Tabs = () => {
	let [categories] = useState({
		Recent: [
			{
				id: 1,
				title: 'Does drinking coffee make you smarter?',
				date: '5h ago',
				commentCount: 5,
				shareCount: 2,
			},
			{
				id: 2,
				title: "So you've bought coffee... now what?",
				date: '2h ago',
				commentCount: 3,
				shareCount: 2,
			},
		],
		Popular: [
			{
				id: 1,
				title: 'Is tech making coffee better or worse?',
				date: 'Jan 7',
				commentCount: 29,
				shareCount: 16,
			},
			{
				id: 2,
				title: 'The most innovative things happening in coffee',
				date: 'Mar 19',
				commentCount: 24,
				shareCount: 12,
			},
		],
		Trending: [
			{
				id: 1,
				title: 'Ask Me Anything: 10 answers to your questions about coffee',
				date: '2d ago',
				commentCount: 9,
				shareCount: 5,
			},
			{
				id: 2,
				title: "The worst advice we've ever heard about coffee",
				date: '4d ago',
				commentCount: 1,
				shareCount: 2,
			},
		],
	});

	return (
		<>
			<Head>
				<title>Hello UI - Tabs</title>
				<meta name="description" content="Tabs Component, he-llo UI" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SideBarLayout>
				<Card>
					<Card.Content>
						<Tab.Group>
							<Tab.List>
								{Object.keys(categories).map((category) => (
									<Tab key={category}>
										{category}
									</Tab>
								))}
							</Tab.List>
							<Tab.Panels>
								{Object.values(categories).map((posts, idx) => (
									<Tab.Panel key={idx}>
										<ul>
											{posts.map((post) => (
												<li
													key={post.id}
													className="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-zinc-700"
												>
													<h3 className="text-sm font-medium leading-5">
														{post.title}
													</h3>

													<ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
														<li>{post.date}</li>
														<li>&middot;</li>
														<li>{post.commentCount} comments</li>
														<li>&middot;</li>
														<li>{post.shareCount} shares</li>
													</ul>

													<a
														href="#"
														className='absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
													/>
												</li>
											))}
										</ul>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</Card.Content>
				</Card>
			</SideBarLayout>
		</>
	);
};
 
export default Tabs;