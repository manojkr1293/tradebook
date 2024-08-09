import { IoMdLock } from "react-icons/io";
const Privacysection = () =>{
  return(
    <>
    <div className="container mx-auto mt-24 mb-24">
      <div className="max-w-6xl mx-auto ">
        <div className=" p-10 rounded-2xl">
          <div className="flex justify-center font-extrabold text-6xl text-[#582a73]">
          <p className="mr-5"><IoMdLock /></p> 
          <h1>Privacy is our #1 concern</h1>
          </div>
          <p className="text-md font-medium text-gray-900 text-center mt-10">Even when carefully kept, paper journals can be read by anyone who happens upon them. Penzu keeps your journals safe with double password protection and military strength encryption so you can rest easy knowing that your entries are secure in the Penzu Vault.</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Privacysection;