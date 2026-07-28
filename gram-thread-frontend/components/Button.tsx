import { ArrowRight } from "lucide-react";


export default function ShopButton(){
return(
  
<button
      className="
      flex items-center gap-2
      mt-4
        px-8 py-4
        rounded-full
        font-semibold
        text-white
        bg-gradient-to-r
        from-purple-600
        via-pink-500
        to-orange-500
        shadow-lg
      "
    >
      <span className="text-[16px] flex items-center justify-center ">Shop Now</span>
      <ArrowRight size={18} />
    </button>


)



}