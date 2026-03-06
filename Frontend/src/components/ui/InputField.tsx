import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
}

export const InputField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
  ({ label, error, textarea, className, ...props }, ref) => {
    const inputClasses = cn(
      'w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors placeholder:text-white/20',
      error && 'border-red-500/50 focus:border-red-500',
      className
    );

    return (
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as any}
            className={inputClasses}
            rows={4}
            {...(props as any)}
          />
        ) : (
          <input
            ref={ref as any}
            className={inputClasses}
            {...props}
          />
        )}
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
