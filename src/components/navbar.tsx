import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border border-primary/75 p-1 rounded-lg">
      <nav className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center bg-primary h-9 text-background px-4 rounded-md">
          <h1 className="font-bold">Resoome</h1>
        </div>

        <Button>Theme toggle</Button>
      </nav>
    </header>
  );
};

export default Navbar;
