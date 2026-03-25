/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens:{
        md: '1150px'
      },
      colors:{
        'red-mafe': '#D81E05',
        'black-title': '#13171A',
        'gray-subtitle': '#8B989F',
        'gray-btn-disable': '#959793',
        'gray-btn-subtitle': '#75848D',
        'gray-border-input': '#D5D4D4',
        'gray-accordion': '#F5F6F7',
        'black-text-input': '#242F3E',
        'white-buttons': '#EEF0F1',
        'circle-inactive': "#F9E7E7",
        'gray-division-section': '#D3D6D8',
        'border-advert': "#FEC84B",
        'black-titlte-acdn':'#23262F',
        'gray-subtitle-acdn': '#575F64',
        'button-calc': "#F9E7E7",
        'gray-encabezado': '#F8F9FA',
        'gray-border-button': '#9EA3A6',
        'green-correct': '#006332',
        'border-red-button': '#FDA29B',
        'gray-bg-resume': '#F4F5F6',
        'bg-app': '#F9FAFB',

      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        'mpf-li': ['MapfreLight', 'sans-serif'],
        'mpf-li-i': ['MapfreLightItalic', 'sans-serif'],
        'mpf-rglr': ['MapfreRegular', 'sans-serif'],
        'mpf-rglr-i': ['MapfreRegularItalic', 'sans-serif'],
        'mpf-mdm': ['MapfreMedium', 'sans-serif'],
        'mpf-mdm-i': ['MapfreMediumItalic', 'sans-serif'],
        'mpf-bold': ['MapfreBold', 'sans-serif'],
        'mpf-bold-i': ['MapfreBoldItalic', 'sans-serif'],
        'mpf-xbold': ['MapfreExtraBold', 'sans-serif'],
        'mpf-xbold-i': ['MapfreExtraBoldItalic', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      datatables: true,
    })
  ],
}

