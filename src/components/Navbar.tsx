import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { publicRoutes } from "./../../routes";
import { Input } from "./ui/input";
import { ModeToggle } from "./ModeToggle/ModeToggle";
import { useAuthStore } from "@/zustand/store";
import { ROUTES } from "@/api";
import { ROLES } from "@/constants/roles";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const { user, clearStore } = useAuthStore();

  const isPublicRoute = publicRoutes.includes(pathname);

  const publicLinks = [
    { path: "/sign-in", title: "Sign In" },
    { path: "/sign-up", title: "Sign Up" },
  ];

  const publicLinkElements = publicLinks.map((link) => (
    <Link key={link.path} to={link.path}>
      <p className="dark:text-neutral-100 text-sm w-16">{link.title}</p>
    </Link>
  ));

  const handleLogOut = () => {
    clearStore();
    navigate(ROUTES.signIn);
    localStorage.removeItem("refreshToken");
  };

  const userProfile = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="user-avatar" />
            <AvatarFallback className="bg-neutral-300">
              {user && user.firstName.charAt(0) + user.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user && `${user.firstName} ${user.lastName}`}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user && user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="absolute z-[100] top-0 flex items-center  justify-between w-full p-4 px-5 h-16 bg-neutral-100  dark:bg-neutral-950 backdrop-blur-md border-b border-neutral-800">
      <div className="relative flex items-center justify-center gap-2">
        <img
          src="/car_logo.png"
          className="opacity-90 scale-70 dark:invert select-none"
          width={70}
        />
        <h2 className="italic flex dark:text-neutral-200 font-bold text-neutral-600">
          Solid Rents
        </h2>
        {user?.role === ROLES.Employee && (
          <p className="absolute font-light italic text-xs -top-1 -right-8">
            Staff
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <ModeToggle />
        <nav className="flex items-center justify-between">
          {isPublicRoute ? publicLinkElements : userProfile}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
