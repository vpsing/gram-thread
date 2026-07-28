import Link from "next/link";


export default function NavBar() {
return(

// {/* <nav className="flex wrap h-full items-center gap-10 justify-center text-[11px] font-medium p-2 bg-[#faf8f5] border-b border-[#e5e5e5] text-[#888]"> */}

//desktop reponsive css
<nav className="
/*desktop reponsive css*/

md:justify-center md:text-[#888] md:gap-10 md:text-[14px] md:font-medium md:bg-[#faf8f5] md:border-b border-[#e5e5e5] md:p-2 

/* Mobile CSS */
flex justify-start overflow-x-auto  text-[11px] gap-4 w-full whitespace-nowrap px-4
">
    
    <Link href="/">HOME</Link>
    <Link href="/">MEN</Link>
    <Link href="/">WOMEN</Link>
    <Link href="/">OVERSIZED</Link>
    <Link href="/">GRAPHIC TEES</Link>
    <Link href="/">COLLECTIONS</Link>
    <Link href="/">SALE</Link>
    <Link href="/new-in" className="flex items-center gap-1">
        <span>New In</span>
        <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
          HOT
        </span>
      </Link>

</nav>


)






}