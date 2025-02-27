import { Separator } from "@/components/ui/separator";
import NavBar from "../components/navbar";
import Daily from "../components/dailystat";
import Weekly from "../components/weeklystat";
import Monthly from "../components/monthlystat";
import { LoginYearlyChart } from "../components/Loginchart";
import { ActivityYearlyChart } from "../components/activitychart";
import { UsersYearlyChart } from "../components/newuserschart";
import { UserTable } from "../components/usertable";

export default function HomePage() {
    return (
      <div>
        <NavBar/>
        <div className="pt-20">
            <p className="text-center text-6xl my-2 pb-4">Logins</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Daily/>
            <Weekly/>
            <div className="md:col-span-1 sm:col-span-2">
            <Monthly/>
            </div>
            </div>
            <LoginYearlyChart/>
            <Separator className="mx-5 mt-5"/>
          </div>
            <div className="mt-5">
          <p className="text-center text-6xl my-2 pb-4">Activity</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Daily/>
            <Weekly/>
            <div className="md:col-span-1 sm:col-span-2">
            <Monthly/>
            </div>
            </div>
            <ActivityYearlyChart/>
            <Separator className="mx-5 mt-5"/>
          </div>
          <div className="mt-5">
          <p className="text-center text-6xl my-2 pb-4">Users</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Daily/>
            <Weekly/>
            <div className="md:col-span-1 sm:col-span-2">
            <Monthly/>
            </div>
            </div>
            <UsersYearlyChart/>
            <UserTable/>
            <Separator className="mx-5 mt-5"/>
          </div>
      </div>
    )
  }