import TabContainer from "./tabContainer";

const Hmtabsection = () =>{
  const tabs = [
    { title: 'Customize', content: {
      img:'https://cdn.prod.website-files.com/630df394ff44d46a174df570/632a54fafe442d637c018a94_Trade%20Tracking.png'
    } },
    { title: 'Organize', content: {
      img:'https://cdn.prod.website-files.com/630df394ff44d46a174df570/632a5737e6685524e1be8f74_Journaling.png'
    } },
    { title: 'Remember', content: {
      img:'https://cdn.prod.website-files.com/630df394ff44d46a174df570/632a54fafe442d637c018a94_Trade%20Tracking.png'
    } },
    { title: 'Encrypt', content: {
      img:'https://penzu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-home-customize.7c671fcf.jpg&w=828&q=75'
    } },
  ];
  
  return(
    <>
    <div className="py-24 bg-[#20232b]">
      <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-6xl">Built For Journaling</h1>
      <p className="text-center text-white font-medium text-md py-8 leading-9">Tradebook was built specifically for recording your daily life in a reflective journal,<br></br> keeping track of milestones in a food diary or pregnancy journal, or even recording your dreams in a dream journal — or just write freely.</p>
      
      <TabContainer tabs={tabs}/>
     
      
      </div>
    </div>
  
    </>
  )
}

export default Hmtabsection;