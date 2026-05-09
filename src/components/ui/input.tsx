import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-500/20",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";
