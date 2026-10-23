import RecDocsItemsCard from "./recentDocsItemCard"
export default function RecentDocuments(){
    return(
        <div className="border-2 border-gray-300 h-full rounded-xl p-6">
            <h1 className="text-2xl font-bold ">Recent documents
                <RecDocsItemsCard />
            </h1>
            
        </div>
    )
}