import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true, 
  },
  theme: {
    // 1. DISABLE DEFAULTS
    colors: {}, 
    spacing: {},
    borderRadius: {}, 
    // Removed the duplicate 'fontSize: {},' line here
    
    // 2. SCREENS
    screens: {
      'md': '768px',
      'lg': '1280px',
      'xl': '1440px',
    },

    // 3. TYPOGRAPHY (The only definition)
    fontSize: {
      'h1': ['var(--font-size-h1)', { lineHeight: 'var(--line-height-h1)', letterSpacing: 'var(--letter-spacing-h1)', fontWeight: '700' }],
      'h2': ['var(--font-size-h2)', { lineHeight: 'var(--line-height-h2)', letterSpacing: 'var(--letter-spacing-h2)', fontWeight: '700' }],
      'h3': ['var(--font-size-h3)', { lineHeight: 'var(--line-height-h3)', fontWeight: '700' }],
      'h4': ['var(--font-size-h4)', { lineHeight: 'var(--line-height-h4)', fontWeight: '700' }],
      'h5': ['var(--font-size-h5)', { lineHeight: 'var(--line-height-h5)', fontWeight: '600' }],
      'h6': ['var(--font-size-h6)', { lineHeight: 'var(--line-height-h6)', fontWeight: '600' }],
      'body-lg': ['var(--font-size-body-lg)', { lineHeight: 'var(--line-height-body-lg)' }],
      'body-md': ['var(--font-size-body-md)', { lineHeight: 'var(--line-height-body-md)' }],
      'caption-md': ['var(--font-size-caption-md)', { lineHeight: 'var(--line-height-caption-md)' }],
      'caption-sm': ['var(--font-size-caption-sm)', { lineHeight: 'var(--line-height-caption-sm)' }],
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'success': 'var(--color-feedback-success)',
        'warning': 'var(--color-feedback-warning)',
        'error': 'var(--color-feedback-error)',
        'info': 'var(--color-feedback-info)',
        'section-primary': 'var(--color-fill-section-primary)',
        'section-secondary': 'var(--color-fill-section-secondary)',
        'container-primary': 'var(--color-fill-container-primary)',
        'container-secondary': 'var(--color-fill-container-secondary)',
        'container-tertiary': 'var(--color-fill-container-tertiary)',
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)',
        'tertiary': 'var(--color-text-tertiary)',
        'disabled': 'var(--color-text-disabled)',
        'inverse': 'var(--color-text-primary-inverse)',
      },
      
      spacing: {
        '0': '0px',
        '2xs': 'var(--space-2xs)', 
        'xs': 'var(--space-xs)',   
        'sm': 'var(--space-sm)',   
        'md': 'var(--space-md)',   
        'lg': 'var(--space-lg)',   
        'xl': 'var(--space-xl)',   
        '2xl': 'var(--space-2xl)', 
        '3xl': 'var(--space-3xl)', 
        '4xl': 'var(--space-4xl)', 
        
        // Contextual
        'page': 'var(--padding-page)',
        'container': 'var(--padding-container)',
        'section-gap': 'var(--margin-section)',
      },

      maxWidth: {
        'page': 'var(--max-width-page)',
        'form': 'var(--max-width-form)',
        '2xl': '592px',
      },

      borderRadius: {
        'sm': 'var(--radius-interactive-sm)', 
        'button': 'var(--radius-interactive-lg)', 
        'md': 'var(--radius-container-md)',   
        'lg': 'var(--radius-container-lg)',   
        'full': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;