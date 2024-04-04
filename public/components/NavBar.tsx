import React from "react";
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <main className="flex justify-center mt-6 bg-slate-50">
      <div className=" flex w-5/6 bg-red-400 place-content-center rounded-2xl">
        <div className=" w-5/6 space-x-24 bg-red-600">
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Facility</Button>
          <Button>Staff</Button>
        </div>
        <div className="flex bg-green-600">
          <Button className="items-end">Join Now</Button>
        </div>
      </div>
    </main>
  );
}
