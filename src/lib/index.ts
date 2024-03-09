// nav imports

import logo from '../../public/icons/logo.svg'
import bag from '../../public/icons/Bag.svg'

import { Search } from 'lucide-react'

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
