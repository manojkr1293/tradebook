const HeroSection = ()=>{
  return(
    <div className="bg-[#D9EEE1] text-white flex justify-center items-center min-h-[500px] pt-10">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
        <h1 className="text-[60px] font-extrabold text-green-950 text-wrap px-30 leadind-6">All in One Trading Journal and <span>Analytics Tool</span></h1>
        <p className="text-gray-950 text-sm font-medium mt-10 px-32 leading-7">Tradebook helps you discover your strengths and weaknesses to become a profitable trader with the power of journaling and analytics.</p>
        <button className="bg-green-950 px-5 py-3 rounded-md text-md text-white shadow-md mt-10">Start your free journal now</button>
        </div>
      </div>
    </div>
  )
}
export default HeroSection;