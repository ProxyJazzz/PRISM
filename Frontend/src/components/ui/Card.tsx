import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ className, hover = true, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'technical-panel p-6 transition-all duration-300',
        hover && 'hover:border-prism-accent/30 hover:bg-white/[0.04]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
