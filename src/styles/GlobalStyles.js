import { createGlobalStyle } from "styled-components";
import "../styles/tailwind.css";
import "../styles/layout.scss";

const GlobalStyles = createGlobalStyle`
    :root{
			&,  &.light-mode {
				--surface-ground: #f9fafb;
				--surface-card: #ffffff;
				/* text */
				--color-dark: #000000;
        --color-primary: #212636;
        --color-light: #8A94A6;
        --color-gray: #667085;
        --color-trend-up:#15B79F;
        --color-trend-down:#F04438;

				/* background */
				--bg-primary: #115E56;
				--bg-secondary: #212636;
        --bg-dark: #000000;
        --bg-primary-darker:#134f49;
        --bg-light:#ccfbef;
        --bg-white:#ffffff;

				/* borders */
        --border-dark: #000000;
        --border-light-gray-blue: #DCDFE4;

        /* shadow */
        --shadow-type-1:'0px 5px 22px 0px #0000000a';
			}

    &.dark-mode {
				--surface-ground: #111827; 
        --surface-card: #1f2937;
        /* bg */
        --bg-primary: #1f2937;
        /* color */
        --text-color: rgba(255, 255, 255, 0.87);
        --color-light: #d1d5db;
			}

      --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 8px;
    --border-radius-lg: 9px;
		}

    

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		transition: color 0.3s, background-color 0.3s;
  }

  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
		background:var(--surface-ground);
		color:var(--color-dark);
		transition: background-color 0.3s, border 0.3s;
    font-size: 16px;
  }

	body {
		min-height: 100vh;
	}

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  .cursor{
    &.cursor-pointer{
      cursor: pointer;
    }
  }
  
`;

export default GlobalStyles;
