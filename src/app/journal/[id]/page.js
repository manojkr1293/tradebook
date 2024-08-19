'use client'

import Header from "@/app/_component/header";
import Profitloss from "@/app/_component/profitloss";
import { fetchSingleJournal } from "@/app/redux/journalSlice";
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
    
      <section className="container my-10 mx-auto">
       
         
          <div className="max-w-6xl mx-auto">
            <div className="border rounded-1xl p-6 shadow-lg shadow-gray-900/5 bg-white rounded-3xl">
            <h1 className="text-2xl text-center m-5 text-blue-800 font-bold">Journal Item</h1>
              <div className="grid grid-cols-3 gap-5">
              <div className="mt-5">
                 <h1 className="text-xl">Stock Name</h1>
                 <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.stock_name}</p>
                </div>
                <div className="mt-5">
                  
                  <h1 className="text-xl">Time Frame</h1>
                  <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.time_frame}</p>
                </div>
                <div className="mt-5">
                <h1 className="text-xl">Trade Status</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.trades_tatus}</p>
                </div>

                <div className="mt-5">
                <h1 className="text-xl">Buying Date</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.buying_date}</p>
                </div>

                <div className="mt-5">
                  
                <h1 className="text-xl">Selling Date</h1>
                  <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.selling_date}</p>
                </div>

                <div className="mt-5">
                <h1 className="text-xl">Buying Price</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.buying_price}</p>
                </div>
                <div className="mt-5">
                <h1 className="text-xl">Selling Price</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.selling_price}</p>
                </div>
                <div className="mt-5">
                <h1 className="text-xl">
                
                Quantity</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.quantity}</p>
                </div>

                <div className="mt-5">
                <h1 className="text-xl">Stop Loss</h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.stop_loss}</p>
                </div>

                <div className="col-span-full mt-5">
                <h1 className="text-xl">Profit / Loss: </h1>
                <p className=" font-bold mt-2 text-md"><Profitloss buyprice = {journalItems.result.buying_price} sellprice={journalItems.result.selling_price}/></p>
                
                </div>

                <div className="col-span-full mt-5">
                <h1 className="text-xl">Notes: </h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.notes}</p>
                
                </div>

                <div className="col-span-full mt-5">
                <h1 className="text-xl">Strategy: </h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.strategy}</p>
                </div>
                <div className="col-span-full mt-5">
                <h1 className="text-xl">
                
                Reason: </h1>
                <p className="text-blue-800 font-bold mt-2 text-md">{journalItems.result.reason}</p>
                </div>
              </div>
            </div>
          </div>
       
      </section>
    </>: null}
    </>
  )
}

export default JournalView;