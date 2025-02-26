"use client"

import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
const chartData = [
    { month: "Jan", desktop: 186 },
    { month: "Feb", desktop: 305 },
    { month: "Mar", desktop: 237 },
    { month: "Apr", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 245 },
    { month: "July", desktop: 190 },
    { month: "Aug", desktop: 280 },
    { month: "Sep", desktop: 220 },
    { month: "Oct", desktop: 260 },
    { month: "Nov", desktop: 310 },
    { month: "Dec", desktop: 275 },
  ]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function UsersYearlyChart() {
  return (
    <Card className="m-5">
      <CardHeader className="flex items-start justify-between">
      <CardTitle>Total Users</CardTitle>
        <Pagination>
  <PaginationContent>
    <PaginationItem>
    <Link className={cn(buttonVariants({variant: "ghost", size: "icon",}),)} href="#">
    <ChevronLeft className="h-4 w-4" />
    </Link>
    </PaginationItem>
    <PaginationItem className="mx-1">
      <Link className={cn(buttonVariants({variant: "ghost", size: "default",}),)} href="#">2025</Link>
    </PaginationItem>
    <PaginationItem>
    <Link className={cn(buttonVariants({variant: "ghost", size: "icon",}),)} href="#">
    <ChevronRight className="h-4 w-4" />
    </Link>
    </PaginationItem>
  </PaginationContent>
  </Pagination>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - Dec 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
