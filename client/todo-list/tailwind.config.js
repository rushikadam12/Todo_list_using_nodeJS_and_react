/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/client/todo-list/src/assets/SignUp/Signup.jsx')",
       
      }
    },
  },
  plugins: [],
 
}
