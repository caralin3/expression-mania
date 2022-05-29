import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          reviewOnFail: true,
        },
      ],
    },
  },
  backgrounds: {
    default: 'blue',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'blue',
        value: '#142f40',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
