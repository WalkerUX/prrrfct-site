import React from 'react';

type LinkSize = 'xs' | 'sm' | 'md';
type IconPosition = 'none' | 'left' | 'right';

interface StandaloneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  selected?: boolean;
  disabled?: boolean;
  size?: LinkSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  children: React.ReactNode;
}

export const StandaloneLink: React.FC<StandaloneLinkProps> = ({ 
  href, 
  selected = false, 
  disabled = false, 
  size = 'sm',
  icon,
  iconPosition = 'none',
  className = '', 
  children,
  ...props 
}) => {
  
  const sizeStyles = {
    xs: "text-caption-sm py-sm gap-xs", 
    // UPDATED: py-lg (20px) -> py-xl (24px) to match your 24px spec
    sm: "text-body-md py-xl gap-md", 
    md: "text-body-lg py-2xl gap-lg", 
  };

  const getStateStyles = () => {
    if (disabled) return "text-disabled font-normal no-underline cursor-not-allowed pointer-events-none";
    if (selected) return "text-brand-primary font-semibold underline decoration-solid";
    
    return `
      text-primary font-normal no-underline 
      hover:text-brand-secondary hover:font-semibold hover:underline 
      active:text-[#A6351D]
    `;
  };

  const layoutStyles = "inline-flex items-center px-0 font-sans transition-all duration-200";

  return (
    <a 
      href={disabled ? undefined : href}
      className={`
        ${layoutStyles} 
        ${sizeStyles[size]} 
        ${getStateStyles()} 
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </a>
  );
};