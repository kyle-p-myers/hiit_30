import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function OfferOne() {
  return (
    <div className="flex text-white">
      <div className="flex-col p-4">
        <div className="flex items-center justify-center rounded-full bg-[#34353B] shadow-2xl w-14 h-14">
          <FitnessCenterIcon className="h-10 w-10" />
        </div>
        <h1 className="text-xl mt-10">3,600 sq. ft. space</h1>
        <p className="text-wrap mt-6">
          Our workouts incorporate bodyweight exercises and a diverse range of
          equipment, including free weights, medicine balls, slam balls,
          kettlebells, ropes, rings, and plyo boxes.
        </p>
        <Button className="text-white mt-10" endIcon={<KeyboardArrowRightIcon />}>
          See More
        </Button>
      </div>
    </div>
  );
}
