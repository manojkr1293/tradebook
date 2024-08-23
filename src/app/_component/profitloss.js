import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Profitloss = ({buyprice,sellprice,qty}) =>{
  const formatNumber = (num) => {
    const positiveNum = Math.abs(num);
    const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' },{ minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return formatter.format(positiveNum);
  };

  const calculateProfitLossPercentage = (purchase, sell,qty) => {
    if (sell && purchase) {
      const profitLoss = sell - purchase;
      const quantityPL= profitLoss*qty;
      const totalPL = formatNumber(quantityPL);
      const percentage = (profitLoss / purchase) * 100;

      if (percentage > 0) {
        return (
          <>
            <div className="flex gap-5"> <p className="p-2 font-bold">{ totalPL }</p>  <span className="bg-green-300 text-green-800 flex p-2 justify-items-end rounded-md"><FaArrowUp className="mr-2 mt-1 text-md"/> {percentage.toFixed(2)}%  </span></div>
          </>
        );
      } else {
        return (
          <>
          
          <div className="flex gap-5"> <p className="p-2 font-bold">{ totalPL } </p>  <span className="text-red-900 bg-red-200 flex p-2 justify-items-end rounded-md"> <FaArrowDown className="mr-2 mt-1 text-md font-light"/> {percentage.toFixed(2)}% </span></div>
           
          </>
        );
      }
    }
  };
  return(
    <>
   {calculateProfitLossPercentage(buyprice,sellprice,qty)}
    </>
  )
}

export default Profitloss;