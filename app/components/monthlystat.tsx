import { buttonVariants } from "@/components/ui/button"
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const Monthly = () => {
    return(
  
      <div>
        <Card className="px-10">
  <div className="flex justify-center gap-20 p-6">
    <CardTitle>Monthly</CardTitle>
    <CardTitle className="rounded-lg border border-black dark:border-white text-center">
        <p className="h-6 w-9 text-xl">15</p>
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
      <Link className={cn(buttonVariants({variant: "ghost", size: "default",}),)} href="#">Feb, 2025</Link>
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
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Month</SelectLabel>
          <SelectItem value="march">March, 2025</SelectItem>
          <SelectItem value="april">April, 2025</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </CardFooter>
  
  </Card>
      </div>
  )
  
  }
  export default Monthly;
