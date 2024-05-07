import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function OfferThree() {
    return (
      <div className="flex text-white">
        <div className="flex-col p-4">
          <div className="flex items-center justify-center rounded-full bg-[#2e2f32] shadow-2xl w-14 h-14">
            <AutoGraphIcon className="h-10 w-10" />
          </div>
          <h1 className="text-xl mt-10">Top Trainers</h1>
          <p className="text-wrap mt-6">
            Discover excellence in fitness with Tristin Williams, acclaimed as the
            best gym trainer of 2023. Elevate your fitness experience with the
            finest in the field.
          </p>
          <Button className="text-white mt-16" endIcon={<KeyboardArrowRightIcon />}>
            Read More
          </Button>
        </div>
      </div>
    );
  }
