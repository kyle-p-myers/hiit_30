import React from "react";
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function NavBar() {
  return (
    <>
      <div className="flex bg-green-400 justify-center">
        <Image
          src="/gym.png"
          width={500}
          height={500}
          objectFit="fill"
          alt="Picture of the gym"
        />
        <div className="absolute inset-0 flex w-5/6 h-12 rounded-2xl justify-self-center bg-amber-400">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Facility</Button>
            <Button>Staff</Button>
            <Button>Join Now</Button>
      </div>
    </div>
    </>
  );
}
