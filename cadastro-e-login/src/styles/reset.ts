import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

h1, h3, span, a {
    text-decoration: none;
}

input, button, select {
    outline: none;
    border: none;
    background-color: transparent;
}

body {
    font-family: 'Inter', sans-serif;
    height: 100vh;
    background-color: var(--Grey-4);
}

:root {
    
    /* Primary Pallete */

    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;

    /* Grey Scale Palette */

    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;

    /* Feedback Palette */

    --Sucess: #3FE864;
    --Negative: #E83F5B;
}`;
