import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./moddle-toggler";

const NavBar = () => {
    return (
        <div className="relative">
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 py-2 bg-background border-b border-black dark:border-white">
        {/* Button positioned absolutely in top-left */}
        <a href="/" className="absolute left-4 top-2 text-lg"> Myauth </a>

        {/* NavigationMenu centered */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="text-sm px-2">
              <a href="#">Docs</a>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm px-2">
              <a href="#">Contact</a>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-sm px-2">
              <a href="#">About</a>
            </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>

            {/* dropmenu top-right */}
            <div  className="absolute right-4 top-2 text-lg me-10" >
            <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="text-sm -mt-2">
            <DropdownMenu>
  <DropdownMenuTrigger className="text-sm me-2">Settings</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><a href="#">Profile</a></DropdownMenuItem>
    <DropdownMenuItem><a href="#">Logout</a></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <ModeToggle/>
              </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu>

            


</div>


      </div>
      {/* Add padding to main content to avoid overlap */}
      <div/>
    </div>
    );
}

export default NavBar;
