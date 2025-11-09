import { Card } from "./card"

interface TransferProp {
    tranx: {
        id : string,
        timestamp: Date,
        amount: number,
        toUserId: string,
        toUser: {
            name: string | null,
            number: string
        },
        fromUserId: string,
        fromUser: {
            name: string | null,
            number: string
        }
    }
    id: string
}

export const TransferCard = ({tranx, id} : TransferProp) => {
    const isSent = (tranx.fromUserId == id) 

    return <Card> 
    <div  className="flex justify-between">
        <div className="flex flex-col justify-between">
            <div className="flex items"> 
                <div>
                    {isSent  ? <SentIcon/> : <ReceivedIcon />}
                </div>
                <div className="text-lg px-4 flex-col items-center">
                    Inr {tranx.amount}
                </div>
            </div>
            <div className="text-md">
                { isSent ? 
                    <div> To: {tranx.toUser.name} </div> :
                    <div> From: {tranx.fromUser.name} </div> 
                }      
            </div> 
        </div>
        <div className="flex items-center">
            {tranx.timestamp.toDateString()}
        </div>
    </div>
    </Card>
}


const SentIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
}

const ReceivedIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
}