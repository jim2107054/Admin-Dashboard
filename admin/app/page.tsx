import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import { Button } from "@/components/ui/button";
import { MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-4">
      <div className="home-div lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart/></div>
      <div className="home-div"><AppPieChart/></div>
      <div className="home-div">Test</div>
      <div className="home-div">Test</div>
      <div className="home-div lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart/></div>
      <div className="home-div">Test</div>
    </div>
  );
}
