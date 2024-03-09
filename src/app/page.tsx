import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Animation } from '@/components/ui/animation'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { home } from '@/lib'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="space-y-8 lg:space-y-12">
      <div className="w-full relative">
        <div
          className="w-96 h-32 rounded-r-full bg-orange-300 opacity-85 top-28 -left-32 -rotate-45 absolute"
          aria-hidden="true"
        />
        <MaxWidthWrapper>
          <div className="w-full flex items-center justify-center pt-8">
            <div className="w-full lg:w-4/5 space-y-8 flex items-center flex-col">
              <div className="w-full space-y-8 flex flex-col items-center">
                <div className="flex flex-col items-start gap-4">
                  <h1>
                    {home.left.first.pre}{' '}
                    <span className="text-primary">{home.left.first.qua}</span>
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1>{home.left.second.foo}</h1>
                  <div className="w-32 h-16 bg-amber-100 flex items-center rounded-[2.5rem] justify-start">
                    <Animation>
                      <Image
                        src={home.left.second.ani}
                        alt="banner"
                        height={40}
                        width={40}
                      />
                    </Animation>
                  </div>
                  <h1 className="text-orange-500">{home.left.second.hea}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-16 bg-rose-100 flex items-center rounded-[2.5rem] justify-start">
                    <Animation>
                      <Image
                        src={home.left.third.ani}
                        alt="apple"
                        height={40}
                        width={40}
                      />
                    </Animation>
                  </div>
                  <h1 className="text-orange-500">{home.left.third.dai}</h1>
                </div>
              </div>
              <p className="w-4/5 text-center">{home.left.label}</p>
              <div className="flex items-center gap-x-3">
                <div className="lg:w-[27rem]">
                  <Input placeholder={home.left.placeholder} />
                </div>
                <Button>{home.left.btn}</Button>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <h5 className="font-semibold">{home.left.city.pop}</h5>

                <div className="flex items-center gap-x-5 cities">
                  {home.left.city.cities.map((ci, i) => (
                    <h5 className="odd:text-gray-100 even:text-primary" key={i}>
                      {ci}
                    </h5>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  )
}
