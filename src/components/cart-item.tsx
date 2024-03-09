import Image from 'next/image'
import Button from './ui/button'
import { nav } from '@/lib'
import Link from 'next/link'

export function Cart() {
  return (
    <Link href={'/cart'}>
      <Image
        src={nav.cart}
        alt="cart icon"
        width={30}
        height={30}
        className="object-cover"
      />
    </Link>
  )
}
