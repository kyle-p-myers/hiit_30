import { CircleCheckBig } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardVariant"





export default function PricingTwo() {
  return (
    <Card className='bg-zinc-900 text-white'>
      <CardHeader>
        <CardTitle className='text-4xl'>$99/mo</CardTitle>
        <CardDescription className='text-slate-400 mb-6'>Unlimited Monthly</CardDescription>
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
      <CardFooter className=''>
        <Button variant={'buyNow'} className="w-full">
           Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
