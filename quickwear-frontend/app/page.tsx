import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── Hero Section ── */}
      <section className="relative bg-[#1a0a0a] min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Background texture */}
        

        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left — Text */}
          <div className="text-white space-y-6">
            <Badge className="bg-red-700 text-white text-xs px-3 py-1">
              New Collection 2026
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Style
              <span className="block text-red-500">Begins</span>
              With You
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Discover the latest fashion trends. Premium quality clothing for every occasion.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/products">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button  className="text-blue   px-8 py-6 text-lg rounded-full">
                  Explore
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Image Placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-100 h-96 bg-gradient-to-b from-red-900 to-red-950 rounded-3xl flex items-center justify-center border border-red-800">
              <ShoppingBag className="w-32 h-32 text-red-500 opacity-50" />
            </div>
          </div>

        </div>
      </section>

    

    </main>
  );
}