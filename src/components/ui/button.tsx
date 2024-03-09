import { ButtonHTMLAttributes, FC } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariant = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:opacity-90',
        ghost: 'bg-transparent hover:text-stone-900 hover:bg-stone-200',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(buttonVariant({ variant, size, className }))}
    >
      {isLoading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : null}
      {children}
    </button>
  )
}

export default Button