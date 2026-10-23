import StatusCard from "@/components/UI/statusCard";
import AttentionFeed from "@/components/UI/attentionFeed";
import RecentDocuments from "@/components/UI/recentDocuments";
import Image from "next/image";

export default function Home() {
	return (
		<main className='bg-white h-screen text-black p-10'>
			<div className='mb-8'>
				<h1 className='text-5xl font-bold'>Dashboard</h1>
				<h4 className='mt-2  text-gray-400'>
					Your Personal administration command center
				</h4>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				<StatusCard />
				<StatusCard />
				<StatusCard />
				<StatusCard />
			</div>

			{/* bottom section */}
			<div className='grid grid-cols-6 h-130 mt-38 gap-8'>
				<div className='col-span-4'>
					<AttentionFeed />
				</div>
				<div className='col-span-2'>
					<RecentDocuments />
				</div>
			</div>

			<div></div>
		</main>
	);
}