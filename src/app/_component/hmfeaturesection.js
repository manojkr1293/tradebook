import { IoMdCheckboxOutline } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiHashtag } from "react-icons/hi2";
const Hmfearturesection =() =>{
  return(
    <>
    <div className="container mx-auto py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-10">
            <div className="border-2 border-[#D9EEE1] rounded-md p-5 shadow-md grid gap-3 justify-items-center text-center">
              <p className="font-extrabold text-green-950 text-[32px]"><IoMdCheckboxOutline /></p>
              <h1 className="font-extrabold text-green-950 text-xl">Unlimited entries </h1>
              <p className="font-normal text-gray-950 text-md text-justify">Unlike other journaling platforms, you can write as much and as often as you like, all for free.</p>
            </div>
            <div className="border-2 border-[#D9EEE1] rounded-md p-5 shadow-md grid justify-items-center items-center gap-3">
              
              <p className="font-extrabold text-green-950 text-[32px]"><BiSolidEdit  /></p>
              <h1 className="font-extrabold text-green-950 text-xl">Custom journals </h1>
              <p className="text-justify text-gray-900 font-normal text-md">Choose different covers, backgrounds, fonts and more for each of your journals and entries.</p>
            </div>
            <div className="border-2 border-[#D9EEE1] rounded-md p-5 shadow-md grid justify-items-center items-center gap-3">
              <p className="font-extrabold text-green-950 text-[32px]"><FaArrowTrendUp  /></p>
              <h1 className="font-extrabold text-green-950 text-xl">Reminders </h1>
              <p className="text-justify text-md font-normal text-gray-900">Set daily, weekly or custom reminders to ensure that you never forget to write in your journal.</p>
            </div>
            <div className="border-2 border-[#D9EEE1] rounded-md p-5 shadow-md grid justify-items-center items-center gap-3">
              <p className="font-extrabold text-green-950 text-[32px]"><HiHashtag  /></p>
              <h1 className="font-extrabold text-green-950 text-xl">Saves as you go </h1>
              <p className="text-justify text-md font-normal text-gray-900">Never worry about losing your work — Penzu saves as you type at your computer or on the go.</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
export default Hmfearturesection;