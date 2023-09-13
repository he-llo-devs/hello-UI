const HeadingsExample = () => {
	return (
		<>
			<div className='flex items-baseline space-x-4'>
				<p className='font-bold'>heading-1</p>
				<p>36px</p>
				<p className='heading-1 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
			</div>
			<div className='flex items-baseline space-x-4'>
				<p className='font-bold'>heading-2</p>
				<p>30px</p>
				<p className='heading-2 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
			</div>
			<div className='flex items-baseline space-x-4'>
				<p className='font-bold'>heading-3</p>
				<p>24px</p>
				<p className='heading-3 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
			</div>
			<div className='flex items-baseline space-x-4'>
				<p className='font-bold'>heading-4</p>
				<p>20px</p>
				<p className='heading-4 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
			</div>
		</>
	);
};
 
export default HeadingsExample;