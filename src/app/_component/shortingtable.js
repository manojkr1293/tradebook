import React, { useEffect, useMemo, useState } from "react";

const Shortingtable = ({initialData = [] }) =>{
    const [data, setData] = useState(initialData);

    useEffect(()=>{
      setData(initialData);
    },[initialData])
    
    const [sortConfig, setSortConfig] = useState({ key: 'stock_name', direction: 'asc' });

    // Function to handle column header clicks
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Function to sort data based on sortConfig
    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const calculateProfitLossPercentage = (purchase, sell) => {
      if (sell && purchase) {
        const profitLoss = sell - purchase;
        const percentage = (profitLoss / purchase) * 100;
  
        if (percentage > 0) {
          return (
            <>
              <span className="text-green-800">{percentage.toFixed(2)}</span>
            </>
          );
        } else {
          return (
            <>
              <span className="text-red-800">{percentage.toFixed(2)}</span>
            </>
          );
        }
      }
    };

    return (
        <div>
          
            <table className="table-auto border-collapse w-full border rounded mt-5">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('stock_name')}>Stock Name {sortConfig.key === 'stock_name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('buying_date')}>Buying Date {sortConfig.key === 'buying_date' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('selling_date')}>Selling Date {sortConfig.key === 'selling_date' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('buying_price')}>Buying Price {sortConfig.key === 'buying_price' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('selling_price')}>Selling Price {sortConfig.key === 'selling_price' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('quantity')}>Quantity {sortConfig.key === 'quantity' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>

                        <th className="p-3 text-left border-2 text-sm text-gray-700" 
                        onClick={() => requestSort('return')}>% Return {sortConfig.key === 'return' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {sortedData.length > 0 ? (
                        sortedData.map(item => (
                            <tr key={item._id}>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.stock_name}</td>
                                
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.buying_date}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.selling_date}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.buying_price}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.selling_price}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.quantity}</td>
                                <td className="p-3 border-2  text-gray-900 text-md font-bold">
                {calculateProfitLossPercentage(
                  item.buying_price,
                  item.selling_price
                )}
              </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="p-3 border-2 text-gray-900 text-md font-bold" colSpan="11">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Shortingtable;