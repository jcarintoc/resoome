import { Link } from "react-router-dom";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import logo from "@/assets/resoome-logo.png";

const Navbar = () => {
  return (
    <header className="z-50 absolute top-2 sm:top-4 left-0 w-full px-2 sm:px-4">
      <nav className="border bg-sidebar/15 backdrop-blur-sm shadow flex items-center justify-between gap-4 p-1 rounded-xl">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <div className="flex items-center justify-center bg-gray-200 dark:bg-primary p-1 rounded-lg">
              <img src={logo} alt="Resoome" className="w-7 h-7" />
            </div>
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-center text-primary"
          >
            <h1 className="text-lg hidden sm:block">Resoome</h1>
          </Link>
        </div>

        <AnimatedThemeToggler variant="default" size="icon" />
      </nav>
    </header>
  );
};

export default Navbar;
