"use client"


import Header from "@/public/components/Header";
import NavBar from "@/public/components/NavBar";
import * as React from "react";


export default function Home() {
  return (
    <>
      <div className="z-10">
        <NavBar />
      </div>
      <div className="z-20">
        <Header />
      </div>

    </>

  );
}
