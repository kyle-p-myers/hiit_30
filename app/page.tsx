"use client"


import NavBar from "@/public/components/NavBar";
import OfferOne from "@/public/components/OfferOne";
import OfferTwo from "@/public/components/OfferTwo";
import * as React from "react";
import OfferThree from "@/public/components/OfferThree";
import PricingOne from "@/public/components/PricingOne";
import PricingTwo from "@/public/components/PricingTwo";


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[#34353B]">
    <NavBar/>
    <div className="mt-[10%] text-5xl">
      What We Offer
    </div>
    <div className="flex w-11/12 mt-[5%] bg-orange-600 justify-between">
      <div className=" w-96 h-96 bg-[#202020] rounded-lg shadow-2xl">
      <OfferOne />
      </div> 
      <div className="w-96 h-96 bg-transparent border border-[#ADF77F] rounded-lg shadow-2xl">
      <OfferTwo/>
      </div> 
      <div className="w-96 h-96 bg-transparent border border-[#ADF77F] rounded-lg shadow-2xl">
        <OfferThree />
      </div> 
      </div>
      <div className="mt-[10%] text-5xl">
      Pricing
      </div>
      <div className="grid grid-cols-3 w-11/12 gap-2 mt-[5%]">
      <div className="grid col-start-1 w-auto h-auto border border-[#ADF77F] bg-transparent rounded-lg shadow-2xl">
        <PricingOne/>
      </div> 
      <div className="grid col-start-2 w-auto h-auto border border-[#ADF77F] bg-transparent rounded-lg shadow-2xl">
        <PricingTwo/>
      </div> 
      </div>
    
   
    </main>

  );
}
