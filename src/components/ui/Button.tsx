import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'inverse' | 'brand-primary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  
  // Base styles
  // CHANGED: rounded-button -> rounded-full (Matches your 80px/200px spec)
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Sizing
  // CHANGED: px-sm (12px) py-xs (8px) -> Matches your new spec image
  const sizeStyles = "px-sm py-xs text-body-md"; 

  const variants = {
    // Primary: Filled Orange
    primary: "bg-brand-primary text-inverse hover:bg-brand-secondary active:bg-brand-primary",
    "brand-primary": "bg-brand-primary text-inverse hover:bg-brand-secondary active:bg-brand-primary",
    
    // Secondary: Outline Orange with BLACK TEXT (Matches your spec)
    secondary: "bg-section-primary border border-brand-primary text-primary hover:bg-brand-primary hover:text-inverse",
    
    // Tertiary: Ghost Orange
    tertiary: "bg-transparent text-brand-primary hover:bg-container-brand",
    
    // Others
    quaternary: "bg-transparent text-secondary hover:text-primary",
    inverse: "bg-inverse text-primary hover:bg-container-tertiary",
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${sizeStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};