'use client'
import { useDispatch, useSelector } from "react-redux";
import Header from "../_component/header";
import { useEffect, useState } from "react";
import InvestmentInsights from "../_component/investmentInsights";
import { fetchJournal } from "../redux/journalSlice";

const Dashboard = () =>{
  const stocksLists = useSelector((state) => state.journal.journalsApiData.result);
  
  const [stocksitems, setStocks] = useState();
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchJournal());
  },[stocksitems]);

  let profitCount = 0;
  let lossCount = 0;
  if(stocksLists){ stocksLists.forEach((stock) => {
    if (stock.buying_price && stock.selling_price) {
      const buyingPrice = parseFloat(stock.buying_price);
      const sellingPrice = parseFloat(stock.selling_price);

      if (sellingPrice > buyingPrice) {
        profitCount++;
      } else {
        lossCount++;
      }
    }
  });
}

  const handleprofitStocks = () => {
    const profitStocks = stocksLists.filter((stock) => {
      const buyingPrice = parseFloat(stock.buying_price);
      const sellingPrice = parseFloat(stock.selling_price);

      return sellingPrice > buyingPrice;
    });
    setStocks(profitStocks);
  };

  const handleTotalStocks = () => {
    setStocks(stocksLists);
  };

  const handleLossMakingStocks = () => {
    const lossStocks = stocksLists.filter((stock) => {
      const buyingPrice = parseFloat(stock.buying_price);
      const sellingPrice = parseFloat(stock.selling_price);

      return sellingPrice < buyingPrice;
    });
    setStocks(lossStocks);
  };

  return(
    <>
    <Header/>
    <section className="my-10 mx-auto container">
      <div className="border rounded-md p-5 bg-[#D9EEE1] shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-green-950 font-extrabold text-5xl">Overview</h1>
            <p className="text-green-950 text-sm py-2 text-center font-medium">
              Markets & Your Investments
            </p>
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-3 gap-5">
              <div className="text-center">
                
               <div
                  className="flex justify-center items-center"
                  onClick={handleTotalStocks}
                >
                   <button className="text-green-950 font-extrabold text-8xl">{stocksLists ? stocksLists.length :0}</button>
                </div>
                <h3 className="text-sm text-green-950 font-medium">Trade Taken</h3>
              </div>
              <div className="text-center">
                
                <div
                  className="flex justify-center items-center"
                  onClick={handleprofitStocks}
                >
                  <button className="text-green-950 font-extrabold text-8xl">{profitCount}</button>
                 
                </div>
                <h3 className="text-sm text-green-950 font-medium">Trade In Profit</h3>
              </div>

              <div className="text-center">
                
                <div
                  className="flex justify-center items-center"
                  onClick={handleLossMakingStocks}
                >
                  <button className="text-green-950 font-extrabold text-8xl">{lossCount}</button>
                </div>
                <h3 className="text-sm text-green-950 font-medium">Trade In Loss</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <InvestmentInsights stocks={stocksitems ? stocksitems : stocksLists} />
  </>
  )
}

export default Dashboard;