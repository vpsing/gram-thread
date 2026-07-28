import { Search } from "lucide-react";

export default function SearchBar(){
    return(
<div className="relative w-full max-w-sm">
<input type="text" placeholder="search product" className=" w-full rounded-full border px-4 py-2 pr-10"/>
  
<button className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white shadow-md">
  <Search size={16} />
</button>

</div>


    )

}