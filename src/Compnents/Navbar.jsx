import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">MS BRAND FASHION</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="text-gray-500" />
      </div>
      <Button variant="outline">
        <ShoppingCart className="mr-2" /> Cart
      </Button>
    </nav>
  );
};

export default Navbar;
