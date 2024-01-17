import { createGlobalStyle } from 'styled-components'

import ailerons from '../../assets/fonts/ailerons.otf'
import rajdhaniRegular from '../../assets/fonts/Rajdhani-Regular.ttf'
import rajdhaniBold from '../../assets/fonts/Rajdhani-Bold.ttf'
import rajdhaniSemiBold from '../../assets/fonts/Rajdhani-SemiBold.ttf'
import rajdhaniLight from '../../assets/fonts/Rajdhani-Light.ttf'
import voltaire from '../../assets/fonts/Voltaire-Regular.ttf'


export default createGlobalStyle`
    @font-face {
        font-family: 'Ailerons';
        src: url(${ailerons});
    }
    @font-face {
        font-family: 'Voltaire';
        src: url(${voltaire});
    }
    @font-face {
        font-family: 'Rajdhani-Regular';
        src: url(${rajdhaniRegular});
    }
    @font-face {
        font-family: 'Rajdhani-Bold';
        src: url(${rajdhaniBold});
    }
    @font-face {
        font-family: 'Rajdhani-SemiBold';
        src: url(${rajdhaniSemiBold});
    }
    @font-face {
        font-family: 'Rajdhani-Light';
        src: url(${rajdhaniLight});
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Ailerons';
    }
`
