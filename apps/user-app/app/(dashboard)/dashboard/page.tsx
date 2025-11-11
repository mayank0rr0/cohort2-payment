import { PageHead } from "@repo/ui/PageHead"
import { DashboardComponent } from "../../../components/DashboardComponent"
import { GraphComponent } from "../../../components/GraphComponent"

export default function Dashboard() {
    return <div className="w-full">
        <PageHead name="Dashboard" />
        <div className="grid grid-cols-2 gap-5 px-10">
            <DashboardComponent />  
            {/* Spending Chart */}
            <GraphComponent />
        </div>
    </div>
}   