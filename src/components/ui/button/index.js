import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
  variants: {
    variant: {
      default: 'bg-gradient-primary text-primary-foreground shadow hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      simple: 'px-0 bg-transparent text-foreground font-medium hover:text-primary hover:bg-transparent',
    }, size: {
      default: 'h-11 px-4 py-2', xs: 'h-7  px-2', sm: 'h-8  px-3 text-xs', lg: 'h-[52px]  px-7', icon: 'h-9 w-9'
    }
  }, defaultVariants: {
    variant: 'default', size: 'default'
  }
})
