Creating Blog Post

Following: 

install the Vite and tailwind

1. npm create vite@latest
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
// Configure your template paths
4. /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

5. Add the Tailwind directives to your CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

// Creating Page 

1. Setup react router

// Creating Header and install flowbite-react

1. Create Header Components 
2. npm i flowbite-react
3. setup header



