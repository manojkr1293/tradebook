'use client'
import Footer from "./_component/footer";
import Header from "./_component/header";
import HeroSection from "./_component/heroSection";
import Hmfearturesection from "./_component/hmfeaturesection";
import Hmtabsection from "./_component/hmtabsection";
import Journey from "./_component/journey";
import Privacysection from "./_component/privacysection";
import Testimonial from "./_component/testimonial";



export default function Home() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <Hmfearturesection/>
    <Hmtabsection/>
    <Testimonial/>
    <Journey/>
    <Footer/>
    </>
  );
}
