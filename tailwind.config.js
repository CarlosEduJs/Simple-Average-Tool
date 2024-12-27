/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'screenMob1': "550px",
        'scrennDesk1': "1072px"
      },
      colors: {
        primary: {
          DEFAULT: '#1E293B', // Slate-800
          light: '#334155', // Slate-700
        },
        secondary: {
          DEFAULT: '#FACC15', // Amarelo-ocre (destaques)
          accent: '#8B5CF6', // Roxo (destaques)
        },
        text: {
          primary: '#E2E8F0', // Branco/cinza claro
          secondary: '#94A3B8', // Cinza suave
        },
        border: '#475569', // Bordas e sombras (Slate-600)
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra leve para modernidade
        strong: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra forte para destaques
      },
    },
  },
  plugins: [],
}

