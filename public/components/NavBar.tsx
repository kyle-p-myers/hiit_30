import React from "react";
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <>
    <div className="flex w-full bg-red-500">
        <Button className="bg-green-400">Home</Button>
        <Button className="bg-green-400">About</Button>
        <Button className="bg-green-400">Facility</Button>
        <Button className="bg-green-400">Staff</Button>
      <Button style={{ color: "#000" }}>Join Now</Button>
    </div>
    </>
  );
}
