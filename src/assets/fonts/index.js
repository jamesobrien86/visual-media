import { createGlobalStyle } from 'styled-components';

import NameOfYourFontWoff from './DINNextLTW23-Regular.woff';
import NameOfYourFontWoff2 from './DINNextLTW23-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'DINNextLTW23-Regular';
        src: local('DINNextLTW23-Regular'), local('DINNextLTW23-Regular'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;