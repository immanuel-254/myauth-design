import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const ChangePasswordForm = () => {
    return(
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="px-10">
  <CardHeader className="text-center">
    <CardTitle>New Password</CardTitle>
  </CardHeader>
  <form method="post">
  <CardContent className="w-96">
    <Label htmlFor="oldpassword">Old Password</Label>
    <Input type="password" placeholder="Old Password" />
    <br/>
    <Label htmlFor="newpassword">New Password</Label>
    <Input type="password" placeholder="New Password" />
    <br/>
    <Label htmlFor="confirmpassword">Confrim Password</Label>
    <Input type="password" placeholder="Confrim Password" />
  </CardContent>
  <CardFooter className="flex flex-col items-center justify-center">
    <Button type="submit">Submit</Button>
    <a href="#" className="my-2">Forgot Password?</a>
  </CardFooter>
  </form>

</Card>
</div>
)

}

export default ChangePasswordForm;
