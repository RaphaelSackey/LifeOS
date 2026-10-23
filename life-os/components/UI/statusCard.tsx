
export default function StatusCard(){
    return (
        <div>
            <div className="shrink-0 overflow-auto">
                <div className="h-3 w-full bg-blue-600 rounded-l-sm rounded-r-sm"></div>
                <div className="p-5 border-2  border-gray-300 rounded-t-sm rounded-b-lg h-35">
                    <h1 className="text-lg font-bold text-gray-400">DUE SOON</h1>
                    <h3 className="text-4xl font-bold mt-1">4</h3>
                    <h4 className="text-md text-gray-400 mt-3">Next 7 days</h4>
                </div>
            </div>
        </div>
    )
}