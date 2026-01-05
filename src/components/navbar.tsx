import { Link } from "react-router-dom";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import logo from "@/assets/resoome-logo.png";

const Navbar = () => {
  return (
    <header className="relative border bg-sidebar p-1 rounded-xl">
      <nav className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <div className="flex items-center justify-center bg-primary p-1 text-background rounded-lg">
              <img src={logo} alt="Resoome" className="w-7 h-7" />
            </div>
          </Link>

          <Link
            to={"/"}
            className="flex items-center justify-center text-primary"
          >
            <h1 className="text-lg">Resoome</h1>
          </Link>
        </div>

        <AnimatedThemeToggler variant="default" size="icon" />
      </nav>
    </header>
  );
};

export default Navbar;
