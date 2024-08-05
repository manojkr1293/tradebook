import InvestmentTable from "./investmentTable";

const InvestmentInsights = (props) => {
  
  return (
    <>
      <section className="my-10 mx-auto container">
        <div className="border rounded p-5 bg-white shadow-sm">
          <h3 className="text-1xl text-gray-800 font-semibold">
            Investment Insights
          </h3>
          <InvestmentTable stockInvestedlists={props.stocks} />
        </div>
      </section>
    </>
  );
};

export default InvestmentInsights;