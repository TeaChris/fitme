import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Button>sign-in</Button>
      <Input placeholder="enter text here" />
    </div>
  )
}
