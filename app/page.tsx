"use client"


import NavBar from "@/public/components/NavBar";
import OfferOne from "@/public/components/OfferOne";
import OfferTwo from "@/public/components/OfferTwo";
import * as React from "react";
import RootLayout from "./layout";
import OfferThree from "@/public/components/OfferThree";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
    <NavBar/>
    </main>
  );
}
