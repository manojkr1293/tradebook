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
      <div className="border rounded p-5 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-800 font-semibold text-3xl">Overview</h1>
            <p className="text-gray-400 text-sm py-2">
              Markets & Your Investments
            </p>
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-3 gap-5">
              <div className="text-center">
                <h3 className="text-xl text-gray-400">Trade Taken</h3>
                <div
                  className="flex justify-center items-center mt-5"
                  onClick={handleTotalStocks}
                >
                  <span className="w-20 h-20 rounded-full bg-blue-300 font-bold flex justify-center items-center">
                    <button className="w-16 h-16 rounded-full bg-blue-500 text-5xl text-gray-100 shadow-lg shadow-gray-700 focus:bg-gray-600 focus:text-gray-200">
                      {stocksLists ? stocksLists.length :0}
                    </button>
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-400">Trade In Profit</h3>
                <div
                  className="flex justify-center items-center mt-5"
                  onClick={handleprofitStocks}
                >
                  <span className="w-20 h-20 rounded-full bg-green-300 font-bold flex justify-center items-center">
                    <button className="w-16 h-16 rounded-full bg-green-500 text-5xl text-gray-100 shadow-lg shadow-gray-700 focus:bg-gray-600 focus:text-gray-200 ">
                      {profitCount}
                    </button>
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl text-gray-400">Trade In Loss</h3>
                <div
                  className="flex justify-center items-center mt-5"
                  onClick={handleLossMakingStocks}
                >
                  <span className="w-20 h-20 rounded-full bg-red-300 font-bold flex justify-center items-center">
                    <button className="w-16 h-16 rounded-full bg-red-500 text-5xl text-gray-100 shadow-lg shadow-gray-700 focus:bg-gray-600 focus:text-gray-200 ">
                      {lossCount}
                    </button>
                  </span>
                </div>
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