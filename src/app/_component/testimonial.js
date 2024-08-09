import { FaStar } from "react-icons/fa";
const Testimonial = () =>{
  return(
    <>
  
    <div className=" py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-green-900 font-extrabold text-6xl px-30">Loved by millions of people </h1>
        </div>
      
        <p className="text-center text-gray-900 font-medium text-xl py-10">Thousands of traders have achieved their goals with the power of TradeZella</p>
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-[#D9EEE1] rounded-2xl p-5 shadow-md ">
            <div className="flex justify-start py-5">
              <img className="w-auto h-auto" src="https://moneyview.in/images/ShantanuGupta.webp"/>
              <div className="px-5">
                <h3 className="text-gray-900 text-xl pt-5">Shantanu Gupta</h3>
                <p className="text-gray-900 text-sm">Feb 26, 2023</p>
                
              </div>
            </div>
            <div className="flex py-3 justify-start">
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
            </div>
            <div className="flex py-2">
              <p>Thank you so much for the service! Your app claim fast loan approval. Got the amount in
              minutes.</p>
            </div>
          </div>

          <div className="border-2 border-[#D9EEE1] rounded-2xl p-5 shadow-md ">
            <div className="flex justify-start py-5">
              <img className="w-auto h-auto" src="https://moneyview.in/images/VikramSher.webp"/>
              <div className="px-5">
                <h3 className="text-gray-900 text-xl pt-5">Shantanu Gupta</h3>
                <p className="text-gray-900 text-sm">Feb 26, 2023</p>
              </div>
            </div>
            <div className="flex py-3 justify-start">
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
              <FaStar className="text-yellow-500 text-3xl mr-3" />
            </div>
            <div className="flex py-2">
              <p>Thank you so much for the service! Your app claim fast loan approval. Got the amount in
              minutes.</p>
            </div>
          </div>
          </div>
        </div>
     
      </div>
    </div>
  
    </>
  )
}

export default Testimonial;