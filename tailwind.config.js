/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
       background : "#000",
       backgroundContrast : "#111",
       textBlack : "#1d1d1f",
       white : "#fff",
       
    },
    fontSize : {
      //  12 , 14 , 17 , 19 , 21 ,28 , 40 , 72 px 

     xs : "0.75rem" , // 12 
     sm : "0.87rem"  ,  // 14 
     base : "1.0625rem" , // 17 
     lg : ["1.1875rem", "1.21"] , // 19 
     xl : "1.3125rem" , // 21 
     "2xl" : "1.5rem" , // 24 
     "3xl" : "1.75rem" , // 28 
     "4xl" : ["2.5rem","1.1"], //  40
     "5xl" : ["4.5rem","1.05" ]// 72  // [fontsize , lineheight]
    },
    extend: {
      boxShadow : {
        'inner-custom' : 'inset 0 0 30px rgba(0 , 0 , 0 , 1)',
      }
    },
  },
  plugins: [],
}


// 