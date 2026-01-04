import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";

const Navbar = () => {
  return (
    <header className="relative bg-background/15 backdrop-blur-lg border p-1 rounded-xl">
      <nav className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center bg-primary h-9 text-background px-4 rounded-lg">
          <h1 className="font-bold">Resoome</h1>
        </div>

        <ThemeTogglerButton modes={["light", "dark"]} />
      </nav>
    </header>
  );
};

export default Navbar;
