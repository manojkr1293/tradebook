import { useEffect, useState } from "react";

const Profitloss = ({buyprice,sellprice}) =>{
  

  
  const calculateProfitLossPercentage = (purchase, sell) => {
    if (sell && purchase) {
      const profitLoss = sell - purchase;
      const percentage = (profitLoss / purchase) * 100;

      if (percentage > 0) {
        return (
          <>
            <span className="text-green-800">{percentage.toFixed(2)} %</span>
          </>
        );
      } else {
        return (
          <>
            <span className="text-red-800">{percentage.toFixed(2)} %</span>
          </>
        );
      }
    }
  };
  return(
    <>
   {calculateProfitLossPercentage(buyprice,sellprice)}
    </>
  )
}

export default Profitloss;