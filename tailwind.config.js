/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'WorkImg': "url('./assets/projects/workImg.jpeg')",
        'realEstate': "url('./assets/projects/realestate.jpg')",
        'LobSocial': "url('./assets/projects/LobSocial.png')",
        'LobShop': "url('./assets/projects/LobShop.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    // ...
  ],
}
