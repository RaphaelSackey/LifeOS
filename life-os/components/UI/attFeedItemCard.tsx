export default function AttFeedItemCard() {
	return (
		<>
			<div className='flex w-full items-center gap-3 rounded-2xl border border-transparent px-2 py-2 hover:cursor-pointer hover:border-gray-300 sm:gap-4'>
				<span className='h-5 w-5 shrink-0 rounded-full bg-amber-600'></span>
				<div className='ml-0 min-w-0 flex-1 sm:ml-2'>
					<h1 className='truncate text-base sm:text-[1.2rem]'>
						lease renewal notice
					</h1>
					<h1 className='text-sm text-gray-400 sm:text-[1rem]'>
						Mar 1, 2027
					</h1>
				</div>
				<div className='ml-auto shrink-0 rounded-full bg-blue-400 px-3 py-1 text-sm sm:px-8 sm:text-[1.2rem]'>
					Renewal
				</div>
			</div>
		</>
	);
}
