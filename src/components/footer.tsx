import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wrapper'
import Image from 'next/image'
import { foot } from '@/lib'

export function Footer() {
  return (
    <footer className="w-full lg:h-60 bg-primary">
      <MaxWidthWrapper>
        <div className="flex items-center lg:pt-20">
          <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:justify-between w-full">
            <Link
              href="/"
              className="text-2xl font-extrabold text-white flex items-center gap-x-1"
            >
              <Image
                src={foot.logo}
                alt="logo"
                width={25}
                height={25}
                className="object-cover"
              />
              <h4 className="text-white">{foot.logoText}</h4>
            </Link>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-x-4">
                {foot.links.map((lin, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-base font-semibold text-white"
                  >
                    {lin}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-x-4">
                {foot.socials.map((soc, i) => (
                  <Link key={i} href={soc.href}>
                    <soc.icon size={20} className="text-white" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <h5 className="text-sm font-semibold text-white">
                {foot.cont.title}
              </h5>
              <h5 className="text-white text-base font-bold tracking-wider">
                {foot.cont.label}
              </h5>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
