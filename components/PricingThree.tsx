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





export default function PricingThree() {
  return (
    <Card className='bg-transparent text-white'>
      <CardHeader>
        <CardTitle className='text-4xl'>$285</CardTitle>
        <CardDescription className='text-slate-400 mb-6'>3 Month Unlimited</CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <ul className=' space-y-4 text-slate-400'>
        <li className='flex gap-2'> <CircleCheckBig className='h-5' />Unlimited HIIT Sessions</li>
          <li className='flex gap-2'> <CircleCheckBig className='h-5' />Unlimited Zumba Sessions</li>
          <li className='flex gap-2'> <CircleCheckBig className='h-5' />Nutritional Guidance</li>
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
