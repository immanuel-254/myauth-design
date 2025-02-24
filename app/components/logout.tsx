import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const LogoutForm = () => {
    return(
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="px-10">
  <CardHeader className="text-center">
    <CardTitle>Logout</CardTitle>
  </CardHeader>
  <CardContent>
        <p>Are you sure?</p>
    </CardContent>
  <form method="post">
  <CardFooter className="flex flex-col items-center justify-center">
    <Button type="submit">Logout</Button>
  </CardFooter>
  </form>

</Card>
</div>
)

}

export default LogoutForm;
