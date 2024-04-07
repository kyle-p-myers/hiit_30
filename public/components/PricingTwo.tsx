import * as React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";

export default function PricingTwo() {
  return (
    <div className="grid grid-cols-1 grid-rows-6 m-auto gap-4">
      <div className="row-start-1 place-content-center text-center text-5xl font-bold">
        $75 /mo
      </div>
      <div className=" col-start-1 row-start-2 text-center font-light text-slate-400">
        12 sessions per month
      </div>
      <div className="row-start-3 flex items-center ">
        <div className="flex  gap-2">
          <CheckCircleIcon />
          Unlimited Hiit Sessions
        </div>
      </div>
      <div className="row-start-4 flex items-center ">
        <div className="flex  gap-2">
          <CheckCircleIcon />
            Unmlimited Zumba Sessions
        </div>
      </div>
      <div className="row-start-5 flex items-center ">
        <div className="flex  gap-2">
          <CheckCircleIcon />
          Unlimited Yoga Sessions
        </div>
      </div>
      <div className="row-start-3 flex items-center ">
        <div className="flex  gap-2">
          <CheckCircleIcon />
          Free InBody Scanning
        </div>
      </div>
      <div className="row-start-3 flex items-center ">
        <div className="flex  gap-2">
          <CheckCircleIcon />
          Nutritional Guidance
        </div>
      </div>
      <div className="row-start-6 place-content-center text-center">
        <Button className="bg-[#ADF77F] text-black w-32 rounded-xl">
          Join Now
        </Button>
      </div>
    </div>
  );
}
