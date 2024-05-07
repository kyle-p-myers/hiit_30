import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const fitnessClass = [
    {
      name: "HIIT 445",
      time: "4:45 AM",
      staff: "Tristin",
      duration: "35 Minutes",
    },
    {
      name: "HIIT 530",
      time: "5:30 AM",
      staff: "Tristin",
      duration: "35 Minutes",
    },
    {
      name: "Zumba",
      time: "11:00 AM",
      staff: "Ianna",
      duration: "45 Minutes",
    },
    {
      name: "HIIT 430",
      time: "4:30 PM",
      staff: "Jack",
      duration: "35 Minutes",
    },
    {
      name: "HIIT 520",
      time: "5:20 PM",
      staff: "Jack",
      duration: "35 Minutes",
    },
    
  ]
  
  export function FridayClassTable() {
    return (
      <Table className="">
        <TableCaption>Available Monday Classes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Class Name</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Staff</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black">
          {fitnessClass.map((classes) => (
            <TableRow key={classes.name}>
              <TableCell className="font-medium">{classes.name}</TableCell>
              <TableCell>{classes.time}</TableCell>
              <TableCell>{classes.staff}</TableCell>
              <TableCell className="text-right">{classes.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    )
  }
  