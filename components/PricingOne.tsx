import { CircleCheckBig } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"





export default function PricingOne() {
  return (
    <Card className='bg-transparent text-white'>
      <CardHeader>
        <CardTitle className='text-4xl'>$75/mo</CardTitle>
        <CardDescription className='text-slate-400 mb-5'>12 punches per month</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <ul className=' space-y-4 text-slate-400 mb-20 mt-1'>
          <li className='flex gap-2'> <CircleCheckBig className='h-5' /> Choice of 12 Sessions</li>
          <li className='flex gap-2'> <CircleCheckBig className='h-5' />Free InBody Scanning</li>
          <li className='flex gap-2'> <CircleCheckBig className='h-5' />Nutritional Guidance</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={'buyNow'} className="w-full">
           Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
