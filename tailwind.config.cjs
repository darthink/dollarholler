const { readBuilderProgram } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sansSerif: ['Source Sans Pro', 'sans-serif'],
      mono: ['Source Code Pro'],
      handwriting: ['Kalam', 'cursive'],
    },
    extend: {
      backgroundImage: {
        arrowLeftUp: "url('/images/arrow-left-up.svg')",
        arrowRightUp: "url('/images/arrow-right-up.svg')",
        chevronDown: "url(/images/chevron--down.svg)",
        circle: "url('/images/circle.svg')",
      }, 
      backgroundPosition: {
        'right-center': '97% center'
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        colored: '0px 7px 16px rgba(127, 91, 220, 0.002)',
        coloredHover: '0px 16px 25px rgba(127, 91, 220, 0.3)',
        slidePanel: '-4px 0px 44px rgba(0, 0, 0, 0.25',
        tableRow: '0px 0px 6px rgba(0, 0, 0, 0.16)',
      },
      colors: {
        lavenderIndigo: '#8657e1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff40',
        whisper: '#f9f4f9',
        pastelPurple: '#b2a1bb',
        purple: '#7209b7',
        robinEggBlue: '#00e9c0',
        blueGem: '#3813a0',
        caribbeanGreen: '#1CC6A0',
        scarlet: '#f72f45',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#efeaf2',
        caribbeanGreen: '#00ca9e',
        fog: '#decaec',
        prim: '#ede6ef',
      },
      gridTemplateColumns: {
        'invoiceLineItem': '1fr 100px 100px 100px 65px',
        'invoiceTable': '100px 100px 60px 1fr 116px 32px 32px',
        'invoiceTableMobile': '1fr 90px',
      },
      zIndex: {
        modal: 999,
        slidePanel: 998,
        overlay: 997,
        navBarToggle: 91,
        navBar: 90,
      },
    },
  },
  plugins: [],
}
