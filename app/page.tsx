"use client"


import NavBar from "@/components/NavBar";
import OfferOne from "@/components/OfferOne";
import OfferTwo from "@/components/OfferTwo";
import * as React from "react";
import OfferThree from "@/components/OfferThree";
import PricingOne from "@/components/PricingOne";
import PricingTwo from "@/components/PricingTwo";
import PricingThree from "@/components/PricingThree";
import ClassTable from "@/components/ClassTabs";


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[#302f31]">
    <NavBar/>
    <div className="mt-[10%] text-5xl text-white">
      What We Offer
    </div>
    <div className="flex w-11/12 mt-[5%] justify-between">
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
      <div className="mt-[10%] text-5xl text-white">
      Pricing
      </div>
      <div className="grid grid-cols-3 w-11/12 gap-2 mt-[5%]">
      <div className="grid col-start-1 w-auto h-auto bg-transparent rounded-lg shadow-2xl">
        <PricingOne/>
      </div> 
      <div className="grid col-start-2 w-auto h-auto bg-transparent rounded-lg shadow-2xl">
        <PricingTwo/>
      </div> 
      <div className="grid col-start-3 w-auto h-auto bg-transparent rounded-lg shadow-2xl">
        <PricingThree/>
      </div> 
      </div>
      <div className="w-full mt-[15%] justify-center">
        <div className=" text-center mb-6 text-5xl text-white">
          Available Classes
        </div>
        <ClassTable />
      </div>
    
   
    </main>

  );
}
