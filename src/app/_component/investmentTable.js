const InvestmentTable = ({ stockInvestedlists }) => {
  console.log(stockInvestedlists);
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
      <table className="table-auto border-collapse text-sm w-full border rounded mt-5">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left border">Stock Name</th>
            <th className="p-3 text-left border">Buying Price</th>
            <th className="p-3 text-left border">Selling Price</th>
            <th className="p-3 text-left border">Date Of Purchase</th>
            <th className="p-3 text-left border">Date Of Selling</th>
            <th className="p-3 text-left border">% Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {stockInvestedlists.map((stocks, index) => (
          
            <tr key={index}>
              <td className="p-3 border text-gray-700 text-sm font-semibold">
                {stocks.stock_name}
              </td>
              <td className="p-3 border  text-gray-700 text-sm font-semibold">
                {stocks.buying_price}
              </td>
              <td className="p-3 border  text-gray-700 text-sm font-semibold">
                {stocks.selling_price && stocks.selling_price}
              </td>
              <td className="p-3 border  text-gray-700 text-sm font-semibold">
                {stocks.buying_date}
              </td>
              <td className="p-3 border  text-gray-700 text-sm font-semibold">
                {stocks.selling_date && stocks.selling_date}
              </td>
              <td className="p-3 border  text-gray-700 text-sm font-semibold">
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
