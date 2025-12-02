import React from 'react';

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ 
  href, 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <a 
      href={href}
      className={`
        /* LAYOUT: Matches your 'inline-flex' screenshot */
        inline-flex items-center
        
        /* SPACING: Matches 'padding: 4px' */
        p-1 
        
        /* RADIUS: Matches 'rounded-sm' (8px) token */
        rounded-sm
        
        /* BORDER RESERVATION: 
           We add a transparent 3px border by default.
           This prevents the text from "jumping" when the focus border appears.
        */
        border-[3px] border-transparent
        
        /* TYPOGRAPHY: Matches 'Caption/C1' */
        text-caption-md text-tertiary underline
        
        /* STATES */
        hover:text-primary 
        
        /* FOCUS STATE 
           - outline-none: Removes default browser glow
           - border-primary: Turns the invisible border Black (#101112)
        */
        focus:outline-none 
        focus-visible:border-primary focus-visible:text-primary
        
        transition-colors duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
};