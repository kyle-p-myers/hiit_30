import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { MondayClassTable } from "./ui/MondayClassTable";
import { TuesdayClassTable } from "./ui/TuesdayClassTable";
import { WednesdayClassTable } from "./ui/WedClassTable";
import { ThursdayClassTable } from "./ui/ThurClassTable";
import { FridayClassTable } from "./ui/FriClassTable";
import { SaturdayClassTable } from "./ui/SatClassTable";
import { SundayClassTable } from "./ui/SunClassTable";

export default function ClassTable() {
  return (
    <div className="w-full">
      <Tabs defaultValue="monday">
        <TabsList className="">
          <TabsTrigger value="monday">Monday</TabsTrigger>
          <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
          <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
          <TabsTrigger value="thursday">Thursday</TabsTrigger>
          <TabsTrigger value="friday">Friday</TabsTrigger>
          <TabsTrigger value="saturday">Saturday</TabsTrigger>
          <TabsTrigger value="sunday">Sunday</TabsTrigger>
        </TabsList>
        <TabsContent value="monday">
         <MondayClassTable />
        </TabsContent>
        <TabsContent value="tuesday">
         <TuesdayClassTable />
        </TabsContent>
        <TabsContent value="wednesday">
         <WednesdayClassTable/>
        </TabsContent>
        <TabsContent value="thursday">
          <ThursdayClassTable/>
        </TabsContent>
        <TabsContent value="friday">
          <FridayClassTable/>
        </TabsContent>
        <TabsContent value="saturday">
          <SaturdayClassTable/>
        </TabsContent>
        <TabsContent value="sunday">
         <SundayClassTable/>
        </TabsContent>

      </Tabs>
    </div>
  );
}
