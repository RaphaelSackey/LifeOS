import AttFeedItemCard from "./attFeedItemCard";

export default function AttentionFeed() {
	return (
		<div className='border-2 h-full rounded-xl border-gray-300 p-6'>
			<h1 className='text-2xl font-bold'>
				Attention feed
				<div>
					<AttFeedItemCard />
					<AttFeedItemCard />
				</div>
			</h1>
		</div>
	);
}
