import React from "react";
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <div className="flex w-full" style={{ backgroundColor: "#dc2626" }}>
      <Stack marginLeft={20} spacing={10} direction="row">
        <Button style={{ color: "#fff" }}>Home</Button>
        <Button style={{ color: "#fff" }}>About</Button>
        <Button style={{ color: "#fff" }}>Facility</Button>
        <Button style={{ color: "#fff" }}>Staff</Button>
      </Stack>
      <Button style={{ color: "#000" }}>Join Now</Button>
    </div>
    </>
  );
}
