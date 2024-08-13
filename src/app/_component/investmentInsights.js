import { useEffect, useState } from "react";
import Shortingtable from "./shortingtable";


const InvestmentInsights = (props) => {
  
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Function to format the date
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  // Function to update the date at midnight
  const updateDateAtMidnight = () => {
    const now = new Date();
    const msTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    setTimeout(() => {
      setCurrentDate(new Date());
      setInterval(() => {
        setCurrentDate(new Date());
      }, 24 * 60 * 60 * 1000); // 24 hours interval
    }, msTillMidnight);
  };

  useEffect(() => {
    updateDateAtMidnight();
  }, []);

  return (
    <>
      <section className="my-10 mx-auto container">
        <div className="border rounded p-5 bg-white shadow-sm">
          <h3 className="text-xl text-gray-800 ">
            Portfolio Snapshot as on <span className="text-green-950 p-2 rounded-md font-extrabold">{formatDate(currentDate)}</span>
          </h3>
         
          <Shortingtable initialData={props.stocks} />
         
        </div>
      </section>
    </>
  );
};

export default InvestmentInsights;