import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import ShopButton from "@/components/Button";
import { Cormorant_Garamond } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1  md:grid-cols-3 px-4 gap-4 w-full max-w-[1200px]  mx-auto pt-16 md:h-[500px]">

        {/* LEFT TEXT */}
        <div className="flex flex-col gap-6 items-start">
          <h1 className="flex flex-col gap-4">

            <span className={`${bodoni.className} block italic font-semibold text-5xl md:text-7xl`}>
              Wear Your
            </span>

            <span className={`${bodoni.className} block italic font-semibold text-5xl md:text-7xl`}>
              Story,
            </span>

            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Own the Look
            </span>

          </h1>

          <p className="text-[14px] leading-5 text-[#888] pt-4">
            Premium quality T-shirts designed for those who don't just follow trends — they set them.
            Same-day delivery. Unmatched comfort.
          </p>
         

          <ShopButton />
        </div>

        {/* MIDDLE CARD */}
        <div className="flex flex-col gap-3 items-start bg-[#f4e7fc] rounded-3xl p-6 shadow-2xl h-fit ">

          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg">
            Bestseller
          </span>
          <div className=" w-full flex items-center justify-center ">
          <img src="tshirt.png" alt="Tshirts" className="w-60   object-contain" />
          </div>
          <p className="font-bold mt-auto ">₹799</p>

        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-fit ">

          {/* YELLOW CARD */}
          <div className="relative shadow-2xl rounded-3xl flex flex-col gap-3 items-start p-4 md:p-6 bg-[#fdeedd] self-start">

            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg">
              NEW
            </span>

            <div className="absolute right-1 top-1/24 -translate-y-1/2 text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              NEW COLLECTION
            </div>
 <div className=" w-full flex items-center justify-center  ">
            <img
              src="yellow-Tshirt.png"
              alt="Tshirts"
              className="w-20   object-contain"
            />
            </div>
          </div>

          {/* AQUA CARD */}
          <div className="shadow-2xl rounded-3xl flex flex-col gap-3 items-start p-4 md:p-6 bg-[#e0f3fe] self-start">

            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg">
              SALE
            </span>

<div className=" w-full flex items-center justify-center ">
            <img
              src="aqua-Tshirt.png"
              alt="Tshirts"
              className="w-30   object-contain"
            />
</div>
          </div>

        </div>

      </section>
    </>
  );
}