import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  -webkit-text-size-adjust: 62.5%;
  -moz-text-size-adjust: 62.5%;
}

body {
  font-size: 1rem;
}

:root {
  --type-scale: 1.25;
  --base-size: 1.45rem;
  --height-scale: 1.2;
  --line-height: 2.1rem;
  --h5: var(--base-size);
  --parag: calc(var(--base-size) * var(--type-scale));
  --h4: calc(var(--parag) * var(--type-scale));
  --h3: calc(var(--h4) * var(--type-scale));
  --h2: calc(var(--h3) * var(--type-scale));
  --h1: calc(var(--h2) * var(--type-scale));
  --h5-Lheight: var(--line-height);
  --para-Lheight: calc(var(--line-height) * var(--height-scale));
  --h4-Lheight: calc(var(--para-Lheight) * var(--height-scale));
  --h3-Lheight: calc(var(--h4-Lheight) * var(--height-scale));
  --h2-Lheight: calc(var(--h3-Lheight) * var(--height-scale));
  --h1-Lheight: calc(var(--h2-Lheight) * var(--height-scale));
  --primary-color: #1f4e79;
  --secondary-color: #f7f7f7;
}

.h1 {
  font-size: var(--h1);
  line-height: var(--h1-Lheight);
}
  
.h2 {
  font-size: var(--h2);
  line-height: var(--h2-Lheight);
}
  
.h3 {
  font-size: var(--h3);
  line-height: var(--h3-Lheight);
}
  
.h4 {
  font-size: var(--h4);
  line-height: var(--h4-Lheight);
}
  
.h5 {
  font-size: var(--h5);
  line-height: var(--h5-Lheight);
}
  
.parag,
a {
  font-size: var(--parag);
  line-height: var(--para-Lheight);
}

img, 
a, 
span {
  display: inline-block;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  --columns: 6;
}

[class*="col-"] {
  --width: 6;
  --init-gap: 0.5%;
  --gap: calc((var(--columns) - var(--width)) * var(--init-gap));
  --initial-basis: calc((var(--width) / var(--columns)) * 100%);
  flex-basis: calc(var(--initial-basis) - var(--gap));
}

.col-1 {
  --width: 1;
}
  
.col-2 {
  --width: 2;
}

.col-3 {
  --width: 3;
}

.col-4 {
  --width: 4;
}

.col-5 {
  --width: 5;
}

@media only screen and (max-width: 950px) {
  :root {
    --type-scale: 1.23;
    --base-size: 1.3rem;
    --height-scale: 1.14;
  }

  .col-1,
  .col-2 {
    --width: 2;
  }  

  .col-3,
  .col-4 {
    --width: 4;
  }

  .col-5,
  .col-6 {
    --width: 6;
  }

}

@media only screen and (max-width: 768px) {
  .col-1,
  .col-2,
  .col-3 {
    --width: 3;
  }

  .col-4,
  .col-5,
  .col-6 {
    --width: 6;
  }
}

@media only screen and (max-width: 600px) {
  :root {
    --base-size: 1.11rem;
    --type-scale: 1.27;
    --height-scale: 1.2;
    --line-height: 1.6rem;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5 {
    --width: 6;
  }
}
  
`;

export default GlobalStyle;