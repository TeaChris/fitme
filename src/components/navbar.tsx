import Link from 'next/link'
import Image from 'next/image'

import { MaxWidthWrapper } from './max-width-wrapper'

import { nav } from '@/lib'
import { Input } from './ui/input'
import { Cart } from './cart-item'
import Button from './ui/button'
import { UserButton } from '@clerk/nextjs'

export function Navbar() {
  const user = false
  return (
    <header className="w-full bg-white inset-x-0">
      <nav className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex h-24 items-center">
            {/* TODO: add mobile nav */}

            <div className="ml-4 flex lg:ml-0 items-center w-full">
              <Link
                href="/"
                className="text-2xl font-extrabold text-black flex items-center gap-x-1"
              >
                <Image
                  src={nav.logo}
                  alt="logo"
                  width={25}
                  height={25}
                  className="object-cover"
                />
                <h4>{nav.logoText}</h4>
              </Link>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
                  <div className="w-[380px] relative">
                    <Input placeholder={nav.input.placeholder} />
                    <nav.input.icon className="text-gray-200 w-5 h-5 right-8 top-2 rotate-90 absolute" />
                  </div>

                  <Cart />

                  {user ? (
                    <UserButton />
                  ) : (
                    <Button>
                      <Link href="/sign-in">{nav.buttonText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  )
}
