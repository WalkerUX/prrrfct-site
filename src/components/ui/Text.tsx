import React from 'react';

type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body-lg' | 'body-md' 
  | 'caption-md' | 'caption-sm';

type TextColor = 
  | 'primary' | 'secondary' | 'tertiary' 
  | 'brand' | 'inverse' | 'error' | 'success';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  as: Component = 'p', 
  variant = 'body-md', 
  color = 'primary', 
  className = '', 
  children 
}) => {
  
  // FIXED: Explicit map so Tailwind scanner can "see" the classes
  const variantStyles: Record<TextVariant, string> = {
    'h1': 'text-h1',
    'h2': 'text-h2',
    'h3': 'text-h3',
    'h4': 'text-h4',
    'h5': 'text-h5',
    'h6': 'text-h6',
    'body-lg': 'text-body-lg',
    'body-md': 'text-body-md',
    'caption-md': 'text-caption-md',
    'caption-sm': 'text-caption-sm',
  };

  const colorStyles: Record<TextColor, string> = {
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'tertiary': 'text-tertiary',
    'brand': 'text-brand-primary',
    'inverse': 'text-inverse',
    'error': 'text-error',
    'success': 'text-success',
  };

  return (
    <Component 
      className={`
        ${variantStyles[variant]} 
        ${colorStyles[color]} 
        ${className}
      `}
    >
      {children}
    </Component>
  );
};