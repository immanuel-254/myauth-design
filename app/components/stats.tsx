import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stat = () => {
    return(

      <div>
        <Card className="px-10">
  <CardHeader className="text-center">
    <CardTitle>Daily</CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 gap-4 text-center">
        <div>Current: 15</div>
        <div>Change: +15</div>
    </div>
    </CardContent>
  
</Card>
      </div>
)

}

export default Stat;