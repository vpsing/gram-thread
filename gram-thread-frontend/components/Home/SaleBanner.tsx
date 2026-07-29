export default function SaleBanner(){
    return(
        <>
        
        <section className="w-full max-w-[1200px] mx-auto mt-10 px-4">
  <div className="rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-8 py-16 flex items-center justify-between">

    {/* Left Side */}
    <div>
      <p className="text-gray-200 text-sm mb-3">
        LIMITED TIME OFFER
      </p>

      <div className="flex flex-col text-5xl font-bold text-white">
        <span>Summer Sale</span>
        <span>Is Live Now! </span>
        
      </div>
    </div>

    {/* Right Side */}
    <div>
      <img
        src="tshirt2.png"
        alt="Tshirts"
        className="w-[350px] h-auto object-contain"
      />
    </div>

  </div>
</section>
        
        </>
    )
}