// tailwind.config.ts
import type { Config } from 'tailwindcss';


type ThemeConfig = Config['theme'] & {
  theme: (path: string) => any;
};

// กำหนด Config object
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ใช้ Type ที่เราสร้างขึ้นมา
      typography: ({ theme }) => ({ // <-- แก้ไขบรรทัดนี้
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.900'),
              fontSize: theme('fontSize.4xl'),
              fontWeight: theme('fontWeight.extrabold'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
            },
            h2: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.3xl'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
              paddingBottom: theme('spacing.2'),
            },
            h3: {
              color: theme('colors.gray.700'),
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.semibold'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
            },
            p: {
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.relaxed'),
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: theme('spacing.6'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
              li: {
                marginBottom: theme('spacing.2'),
                '&::marker': {
                  color: theme('colors.blue.500'),
                },
              },
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: theme('spacing.6'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
              li: {
                marginBottom: theme('spacing.2'),
                '&::marker': {
                  color: theme('colors.blue.500'),
                },
              },
            },
            blockquote: {
              borderLeft: `4px solid ${theme('colors.gray.300')}`,
              paddingLeft: theme('spacing.4'),
              fontStyle: 'italic',
              color: theme('colors.gray.600'),
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
              thead: {
                borderBottom: `2px solid ${theme('colors.gray.300')}`,
                tr: {
                  th: {
                    padding: theme('spacing.3'),
                    textAlign: 'left',
                    fontWeight: theme('fontWeight.semibold'),
                    color: theme('colors.gray.800'),
                  },
                },
              },
              tbody: {
                tr: {
                  borderBottom: `1px solid ${theme('colors.gray.200')}`,
                  td: {
                    padding: theme('spacing.3'),
                    color: theme('colors.gray.700'),
                  },
                },
              },
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.red.600'),
              padding: '0.2em 0.4em',
              borderRadius: theme('borderRadius.md'),
              fontWeight: theme('fontWeight.normal'),
            },
            'pre code': {
              backgroundColor: 'unset',
              color: 'unset',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.100'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;