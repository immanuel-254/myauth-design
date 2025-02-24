import { Separator } from "@/components/ui/separator";
import NavBar from "../components/navbar";
import Stat from "../components/stats";

export default function HomePage() {
    return (
      <div>
        <NavBar/>
        <div className="pt-20">
            <p className="text-center text-3xl my-2">Logins</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Stat/>
            <Stat/>
            <div className="md:col-span-1 sm:col-span-2">
            <Stat/>
            </div>
            </div>
            <Separator className="mx-5 mt-5"/>
          </div>
            <div className="mt-5">
          <p className="text-center text-3xl my-2">Activity</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Stat/>
            <Stat/>
            <div className="md:col-span-1 sm:col-span-2">
            <Stat/>
            </div>
            </div>
            <Separator className="mx-5 mt-5"/>
          </div>
          <div className="mt-5">
          <p className="text-center text-3xl my-2">New Users</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-5">
            <Stat/>
            <Stat/>
            <div className="md:col-span-1 sm:col-span-2">
            <Stat/>
            </div>
            </div>
            <Separator className="mx-5 mt-5"/>
          </div>
      </div>
    )
  }