import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LinearScaleIcon from '@mui/icons-material/LinearScale';

export default function OfferTwo() {
  return (
    <div className="flex">
      <div className="flex-col p-4">
        <div className="flex items-center justify-center rounded-full bg-[#2e2f32] shadow-2xl w-14 h-14">
          <LinearScaleIcon className="h-10 w-10" />
        </div>
        <h1 className="text-xl mt-10">In-Depth Fitness Metrics</h1>
        <p className="text-wrap mt-6">
          Get personalized nutrition guidance, help with setting macros, and
          access cutting-edge fitness monitoring with MYZONE and complimentary
          InBody analysis for members.
        </p>
        <Button className="text-white mt-10" endIcon={<KeyboardArrowRightIcon />}>
          Read More
        </Button>
      </div>
    </div>
  );
}
