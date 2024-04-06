import React from "react";
import Button from '@mui/material/Button';
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className="relative h-screen w-11/12 bg-cover bg-no-repeat" style={{backgroundImage: "url('/hiitHeader.png')"}}>
      <div className="absolute inset-x-0 top-0 flex justify-center mt-6 z-10">
        <div className="flex gap-20 bg-stone-900 bg-opacity-5 shadow-lg backdrop-blur-xl w-11/12 p-1 rounded-3xl">
          <Button className=" ml-2 text-white font-comfortaa">Home</Button>
          <Button className="text-white">About</Button>
          <Button className="text-white">Facility</Button>
          <Button className="text-white">Staff</Button>
          <Button className="ml-auto mr-5 bg-lime-400 rounded-3xl w-32 text-black">Join Now</Button>
        </div>
        </div>
        </div>
    
  );
}
