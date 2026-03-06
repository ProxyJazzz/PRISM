import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest',
        variant === 'primary' ? 'bg-prism-accent/10 text-prism-accent border border-prism-accent/20' : 'border border-white/10 text-white/40',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
