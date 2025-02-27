import { buttonVariants } from "@/components/ui/button"
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input";
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const Daily = () => {
    return(
  
      <div>
        <Card className="px-10">
  <div className="flex justify-center gap-20 p-6 pt-8">
    <CardTitle>Daily</CardTitle>
    <CardTitle>
        <p className="text-6xl -mt-5">15</p>
    </CardTitle>
  </div>
  <Separator/>
  <CardContent className="flex flex-col items-center justify-center mt-4">
    <Pagination>
  <PaginationContent>
    <PaginationItem>
    <Link className={cn(buttonVariants({variant: "ghost", size: "icon",}),)} href="#">
    <ChevronLeft className="h-4 w-4" />
    </Link>
    </PaginationItem>
    <PaginationItem className="mx-1">
      <Link className={cn(buttonVariants({variant: "ghost", size: "default",}),)} href="#">25 Feb 2025</Link>
    </PaginationItem>
    <PaginationItem>
    <Link className={cn(buttonVariants({variant: "ghost", size: "icon",}),)} href="#">
    <ChevronRight className="h-4 w-4" />
    </Link>
    </PaginationItem>
  </PaginationContent>
  </Pagination>
    </CardContent>
    <CardFooter className="flex flex-col items-center justify-center text-center">
      <div><Input type="date"/></div>
    </CardFooter>
  
  </Card>
      </div>
  )
  
  }
  export default Daily;