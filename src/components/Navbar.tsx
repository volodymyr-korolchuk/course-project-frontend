import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "./../../routes";
import { Input } from "./ui/input";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isPublicRoute = publicRoutes.includes(pathname);

  const publicLinks = [
    { path: "/sign-in", title: "Sign In" },
    { path: "/sign-up", title: "Sign Up" },
  ];

  const publicLinkElements = publicLinks.map((link) => (
    <Link key={link.path} to={link.path}>
      <p className="dark:text-white text-sm w-16">{link.title}</p>
    </Link>
  ));

  const userProfile = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="font-comfortaa">
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="user-avatar" />
            <AvatarFallback className="bg-neutral-300">JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="font-comfortaa w-56"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              johndoe217@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="flex items-center font-comfortaa justify-between absolute w-screen p-4 px-5 h-16 bg-neutral-100  dark:bg-neutral-950 backdrop-blur-md border-b dark:border-neutral-800">
      <h2 className="dark:text-neutral-200 font-normal">RentIO</h2>

      <div className="flex items-center justify-between gap-5">
        {isPublicRoute ? null : (
          <Input
            className="text-neutral-950 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700 border-neutral-400 dark:border-neutral-800"
            placeholder="Search..."
          />
        )}

        <nav className="flex items-center justify-between">
          {isPublicRoute ? publicLinkElements : userProfile}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
