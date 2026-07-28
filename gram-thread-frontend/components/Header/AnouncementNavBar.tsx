import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderAction";
import NavBar from "./NavBar";

export default function AnouncementNavbar() {
  return (
    <>
      <header className="bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 min-h-10 py-2  uppercase ">
        <div className=" flex flex-wrap h-full items-center justify-center  gap-5 text-[11px]  sm:text-[11px] font-medium uppercase tracking-[0.2em]  text-white/90  ">
          <span className="text-white "> Free delivery </span>
          <span className="text-white ">•</span>
          <span className="text-white ">Same Day Delivery in 30Km Radius</span>
          <span className="text-white ">•</span>
          <span className="text-white ">Easy 7-Day Return</span>
          <span className="text-white ">•</span>
          <span className="text-white ">COD Available</span>
        </div>
      </header>
      <nav className="flex flex-wrap items-center justify-between md:justify-center md:gap-50 bg-white-50 gap-2 p-5">
        <Logo />
        <div className="flex justify-center order-3 mt-3 w-full md:order-none md:mt-0 md:w-[400px]">
          <SearchBar />
        </div>

        <HeaderActions />
      </nav>
      <div className="">
        <NavBar />
      </div>
    </>
  );
}
