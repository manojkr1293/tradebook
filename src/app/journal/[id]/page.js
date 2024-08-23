'use client'

import Header from "@/app/_component/header";
import Profitloss from "@/app/_component/profitloss";
import { fetchSingleJournal } from "@/app/redux/journalSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const JournalView = (props) =>{
  
  const dispatch = useDispatch();
  const journalItems = useSelector((state) => state.journal.journalItems);
  
  useEffect(()=>{
    dispatch(fetchSingleJournal(props.params.id))
  },[])
  return(
    <>
    <Header/>
    {journalItems.result ?  <>
    
      <section className="container my-2 mx-auto">
       
         
          <div className="max-w-6xl mx-auto">
            <div className=" p-6 shadow-lg shadow-gray-900/5 bg-white">
            <h1 className="text-center text-green-900 font-extrabold text-6xl px-30 mb-5">Stock Journal </h1>
            <table className="border-separate border-spacing-2 w-full border-4 rounded-2xl p-3 border-slate-200 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm ">
  
  <tbody>
    <tr>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Stock Name</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.stock_name}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Time Frame</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.time_frame}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Trade Status</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.trades_tatus}</p>
      </td>
    </tr>
    <tr>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Buying Date</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.buying_date}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Selling Date</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.selling_date}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Buying Price</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.buying_price}</p>
      </td>
    </tr>
    <tr>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Selling Price</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.selling_price}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Quantity</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.quantity}</p>
      </td>
      <td className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Stop Loss</p>
        <p className="text-gray-700 text-xl font-medium">{journalItems.result.stop_loss}</p>
      </td>
    </tr>
    <tr>
      <td colSpan="3" className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Profit / Loss</p>
        <p className="text-gray-700 text-xl font-medium">
        <Profitloss buyprice = {journalItems.result.buying_price} sellprice={journalItems.result.selling_price} qty={journalItems.result.quantity}/>
        </p>
      </td>
    </tr>
    <tr>
      <td colSpan="3" className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Learnings From The Trade</p>
        <p className="text-gray-700 text-xl font-medium">
        {journalItems.result.notes}
        </p>
      </td>
    </tr>
    <tr>
      <td colSpan="3" className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Reference Link</p>
        <p className="text-gray-700 text-xl font-medium">
        {journalItems.result.reference_link && <Link target="_blank" className='hover:text-blue-800 text-blue-600' href={journalItems.result.reference_link}>{journalItems.result.reference_link}</Link>}
        </p>
      </td>
    </tr>
    <tr>
      <td colSpan="3" className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Strategy</p>
        <p className="text-gray-700 text-xl font-medium">
        {journalItems.result.strategy}
        </p>
      </td>
    </tr>
    <tr>
      <td colSpan="3" className="border border-slate-300 p-4">
        <p className="text-gray-400 text-sm font-medium mb-2">Reason For Taking The Trade</p>
        <p className="text-gray-700 text-xl font-medium">
        {journalItems.result.reason}
        </p>
      </td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
       
      </section>
    </>: null}
    </>
  )
}

export default JournalView;