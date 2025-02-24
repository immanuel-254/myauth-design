import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";
import { ModeToggle } from "../components/moddle-toggler";
import NavBar from "../components/navbar";
import { PenIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center h-screen">

        <Card>
  <CardHeader>
    <CardTitle className="flex flex-col items-center justify-center">Profile</CardTitle>
    <hr />
    <br/>
    <CardDescription>This is your profile</CardDescription>
  </CardHeader>
  <CardContent className="w-96">
    <p>Email: text@example.com</p>
    <br />
    <div className="grid grid-cols-2">
        <div>
        <p>Password: ***********</p>
        </div>
        <div><a href="#"> <PenIcon className="h-5 w-5"/></a></div>
    </div>
  </CardContent>
  <hr />
  <CardFooter className="flex flex-col items-center justify-center mt-3">
    <Button variant={"destructive"}>Delete</Button>
  </CardFooter>

</Card></div>
    </div>
  )
}