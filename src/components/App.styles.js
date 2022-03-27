import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing:border-box ;
  }

  :root{
    /* Typography */
    --font-family:'Overpass', sans-serif; 
    --font-size:15px;
    /* Colors */
    --primary:hsl(25, 97%, 53%);
    --white:hsl(0, 0%, 100%);
    --light-grey:hsl(217, 12%, 63%);
    --medium-grey:hsl(216, 12%, 54%);
    --dark-blue:hsl(213, 19%, 18%);
    --very-dark-blue:hsl(216, 12%, 8%);
  }

  body,html{
      font-family:var(--font-family);
      font-size:var(--font-size);
  }

`;

export default AppStyle;
