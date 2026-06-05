import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#F7C5CC] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black tracking-tight">
          Quick<span className="text-orange-500">Wear</span>
        </Link>

        {/* Nav Links */}
        
<input 
        type="text"
        placeholder="Search products..."
        className="border px-4 py-2 rounded-full w-full max-w-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
              0
            </Badge>
          </Link>

          <Link href="/login">
            <Button variant="ghost" size="icon">
              <User className=" " />
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </header>
  );
}