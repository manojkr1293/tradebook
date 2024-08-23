
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Profitloss from "./profitloss";

const Shortingtable = ({initialData = [] }) =>{
  const [data, setData] = useState(initialData);
  const router = useRouter();
  useEffect(() => {
      // Update only if initialData has actually changed
      if (JSON.stringify(initialData) !== JSON.stringify(data)) {
          setData(initialData);
      }
  }, [initialData, data]);
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

  

    const stockview = (id) =>{
      router.push('journal/'+id);
    }
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
                                <td className="p-3 border-2 text-gray-900 text-md font-bold" onClick={(e)=>stockview(item._id)}>{item.stock_name}</td>
                                
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.buying_date}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.selling_date}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.buying_price}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.selling_price}</td>
                                <td className="p-3 border-2 text-gray-900 text-md font-bold">{item.quantity}</td>
                                <td className="px-3 border-2  text-gray-900 text-md">
                                  <Profitloss buyprice = {item.buying_price} sellprice={item.selling_price} qty={item.quantity}/>
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