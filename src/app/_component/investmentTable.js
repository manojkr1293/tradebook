import React, { useMemo, useState } from "react";


const InvestmentTable = ({ stockInvestedlists }) => {

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

  if (!stockInvestedlists || stockInvestedlists.length === 0) {
    return <p>No stocks to display</p>;
  }
  return (
    <>
      <table className="table-auto border-collapse w-full border rounded mt-5">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left border-2 text-sm text-gray-700">
            <button
              type="button"
              
            >
              Stock Name
            </button>
              </th>
            <th className="p-3 text-left border-2 text-sm text-gray-700">Buying Price</th>
            <th className="p-3 text-left border-2 text-sm text-gray-700">Selling Price</th>
            <th className="p-3 text-left border-2 text-sm text-gray-700">Date Of Purchase</th>
            <th className="p-3 text-left border-2 text-sm text-gray-700">Date Of Selling</th>
            <th className="p-3 text-left border-2 text-sm text-gray-700">% Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {stockInvestedlists.map((stocks, index) => (
          
            <tr key={index}>
              <td className="p-3 border-2 text-gray-900 text-md font-bold">
                {stocks.stock_name}
              </td>
              <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {stocks.buying_price}
              </td>
              <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {stocks.selling_price && stocks.selling_price}
              </td>
              <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {stocks.buying_date}
              </td>
              <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {stocks.selling_date && stocks.selling_date}
              </td>
              <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {calculateProfitLossPercentage(
                  stocks.buying_price,
                  stocks.selling_price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InvestmentTable;
