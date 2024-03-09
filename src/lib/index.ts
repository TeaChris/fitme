// nav imports
import logo from '../../public/icons/logo.svg'
import bag from '../../public/icons/Bag.svg'
import { Search } from 'lucide-react'

// home imports
import ban from '../../public/icons/ban.svg'
import apl from '../../public/icons/apple.svg'

// footer imports
import logo2 from '../../public/icons/logo2.svg'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'

export const nav = {
  logo: logo,
  logoText: 'FitMe',
  input: {
    placeholder: 'Enter item or restaurant you are looking for',
    icon: Search,
  },
  cart: bag,
  buttonText: 'Sign in',
} as const

export const home = {
  left: {
    first: {
      pre: 'Premium',
      qua: 'quality',
    },
    second: {
      foo: 'Food for your',
      ani: ban,
      hea: 'healthy',
    },
    third: {
      ani: apl,
      dai: '& Daily Life',
    },
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    placeholder: 'Enter your delivery location',
    btn: 'Get Started',
    city: {
      pop: 'Popular cities in Nigeria',
      cities: ['Ikeja', 'Onitsha', 'Sango', 'Ilesha', 'Lekki', 'Apapa'],
    },
  },
} as const

export const foot = {
  logo: logo2,
  logoText: 'FitMe',
  links: ['About us', 'Delivery', 'Help & Support', 'T&C'],
  socials: [
    {
      href: 'https://www.linkedin.com/TeaChris',
      icon: FaLinkedinIn,
    },
    {
      href: 'https://www.x.come/',
      icon: FaXTwitter,
    },
    {
      href: 'https://www.github.com/TeaChris',
      icon: FaGithub,
    },
  ],
  cont: {
    title: 'Contact:',
    label: '+234 8146913991',
  },
} as const
