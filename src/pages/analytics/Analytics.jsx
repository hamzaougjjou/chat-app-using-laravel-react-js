import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import Customers from "./Customers";
import Filters from "./Filters";
import Products from "./Products";
import Sales from "./Sales";
import Visitors from "./Visitors";
import VisitorsByCountry from "./VisitorsByCountry";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Analytics() {
    return (
        <div className="flex flex-wrap
        gap-8 py-8">

            <div className="min-h-screen w-full ">

                <div className="w-full">
                    <header className="flex items-center gap-4 border-b bg-muted/40 px-6">

                        <h1 className="font-semibold text-lg md:text-xl">Analytics</h1>
                        <Filters />

                    </header>

                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        <div className="grid gap-6">
                            <div className="flex flex-wrap gap-6 overflow-x-auto overflow-y-hidden">
                                {/* <div className="flex md:grid-cols-3 gap-6"> */}

                                <div className="border rounded p-2 bg-[#F9F9F9] h-[500px] min-w-[500px] flex-1">
                                    <Sales />
                                </div>


                                <div className="border rounded p-2 bg-[#F9F9F9] h-[500px] min-w-[500px] flex-1">
                                    <Visitors w={600} />
                                </div>

                                <div className="border rounded p-2 bg-[#F9F9F9] h-[500px] min-w-[500px] flex-1">
                                    <VisitorsByCountry />
                                </div>


                            </div>


                            <div className="grid md:grid-cols-2 gap-6">

                                {/* <Products /> */}

                                <Customers />

                            </div>
                        </div>
                    </main>
                </div>
            </div>


        </div>
    );
}


export default Analytics













