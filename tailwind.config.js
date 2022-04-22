module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:(theme)=>({
        "primary-background":
        "url('/src/assets/images/background.jpg')",
      }),
      backgroundColor: (theme) =>({
        "footer-transparent": "rgba(102, 223, 253, 0.2)",
        "footer-background": "#00ffaa",
        "header-table-background": "#00ffaa",
        "button-primary-background":"#00ffaa",
      }),
      borderColor:(theme)=>({
        ...theme("colors"),
        "primary-border":"#00ffaa"
      }),
      borderRadius:{
        mainLayoutPadding: "1rem 2rem 0 2rem",
        mainLayoutRadius: "20px 20px 0 0",
      },
      height:{
        footerWrapper:"2.1875rem",

      },
      width: {
        footerWrapper: "95%",
      },
      
    },
    
  },  
  plugins: [],
}
