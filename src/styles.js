import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  borderColor: "rgb(219,219,219)",
  fontColor: "rgb(38,38,38)",
  bgColor: "#FAFAFA",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
${reset}
   input{
     all:unset;
   }
   *{
     box-sizing:border-box;
   }
   body{
     background-color: ${(props) => props.theme.bgColor};
     font-size:14px;
     font-family:'Open Sans', sans-serif;
     color: ${(props) => props.theme.fontColor};
   }
   a{
     text-decoration: none;
     color: inherit;
   }
   
   input[type=text]{
    color: rgb(38,38,38);
   } 

   input[type=password]{
    color: rgb(38,38,38);
   } 

   input[type=email]{
    color: rgb(38,38,38);
   }
`;
