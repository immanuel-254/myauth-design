import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const LoginForm = () => {
    return(
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="px-10">
  <CardHeader className="text-center">
    <CardTitle>Login</CardTitle>
    <br/>
    <CardDescription>Type in your Email Address and Password</CardDescription>
  </CardHeader>
  <form method="post">
  <CardContent className="w-96">
    <Label htmlFor="email">Your email address</Label>
    <Input type="email" placeholder="Email" />
    <br/>
    <Label htmlFor="password">Password</Label>
    <Input type="password" placeholder="Password" />
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

export default LoginForm;
