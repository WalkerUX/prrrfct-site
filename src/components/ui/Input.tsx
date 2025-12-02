import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col w-full text-left">
      {label && (
        // FIXED: text-caption -> text-caption-sm
        <label className="text-caption-sm text-secondary font-semibold mb-xs">
          {label}
        </label>
      )}
      <input
        className={`
          w-full
          bg-container-primary
          text-primary 
          placeholder:text-disabled
          rounded-sm
          p-sm
          text-body-md
          border border-disabled
          focus:outline-none 
          focus:ring-2 
          focus:ring-brand-primary
          focus:border-transparent
          transition-all
          ${error ? 'ring-2 ring-error' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        // FIXED: text-caption -> text-caption-sm
        <span className="text-caption-sm text-error mt-xs">
          {error}
        </span>
      )}
    </div>
  );
};