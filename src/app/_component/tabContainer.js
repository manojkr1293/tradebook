import { useState } from "react";

const Tab = ({ title, isActive, onClick }) => (
  <div
    className={`py-3 ${isActive ? 'active text-green-900 font-extrabold' : ''}`}
    onClick={onClick}
  >
    {title}
  </div>
);

const TabContent = ({ content }) => (
  <div className="max-w-2xl mx-auto mt-10">
    <img src= {content.img}/>
  </div>
);

const TabContainer = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-2xl mx-auto">
        <div className=" flex justify-center text-center gap-10 rounded-md bg-[#D9EEE1] ">
        {tabs.map((tab, index) => (
          <Tab
          
            key={index}
            title={tab.title}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

export default TabContainer;