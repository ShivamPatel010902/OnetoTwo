import { Home, SignIn, Registerfor, BrowesProfiles} from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Register",
    path: "/register",
    element: <Registerfor />,
  },
  {
    icon: UserPlusIcon,
    name: "Login",
    path: "/login",
    element: <SignIn />,
  },
  {
    icon: UserCircleIcon,
    name: "Browse Profilles",
    path: "/browesprofiles",
    element: <BrowesProfiles />,
  },
  {
    icon: DocumentTextIcon,
    name: "Services",
    href: "#",
    element: "",
  },
];

export default routes;
