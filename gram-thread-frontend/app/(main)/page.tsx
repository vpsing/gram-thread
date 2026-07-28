import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import ShopButton from "@/components/Button";
import { Cormorant_Garamond } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import HeroSection from "@/components/Home/HeroSection";
import SaleBanner from "@/components/Home/SaleBanner";
import ProductSection from "@/components/Home/ProductSection";
import Testimonials from "@/components/Home/Testimonials";



export default function Home() {
  return (
    <>
    <SaleBanner/>
      <HeroSection/>
      <ProductSection/>
      <Testimonials/>
    </>
  );
}