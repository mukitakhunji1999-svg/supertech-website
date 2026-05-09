import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:  "bg-primary-700 text-white hover:bg-primary-800 shadow-sm active:bg-primary-900",
        outline:  "border border-primary-700 bg-white text-primary-700 hover:bg-primary-50 active:bg-primary-100",
        ghost:    "text-primary-700 hover:bg-primary-50",
        secondary:"bg-navy-700 text-white hover:bg-navy-800",
        white:    "bg-white text-primary-700 hover:bg-primary-50 shadow-sm"
      },
      size: {
        default: "h-11 px-6",
        sm:      "h-9 px-4 text-xs rounded",
        lg:      "h-12 px-8 rounded-lg",
        icon:    "h-10 w-10"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
