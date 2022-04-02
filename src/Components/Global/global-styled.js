import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-family: 'Karla', sans-serif;
        padding:0;
        margin:0;
    }

    body{
        background:#fefefe;
        padding:72px;
    }

    body::after{
        content:'';
        width:100%;
        height:280px;
        background:#fafafa;
        top:0;
        left:0;
        position:absolute;
        z-index:-1;
    }

    h1,
    h2,
    h3{
        font-weight:bold;
    }

    h1{
        font-size:40px;
    }

    h2{
        font-size:24px;
    }

    he3{
        font-size:18px;
    }

    p{
        font-size:16px;
    }

    .cols2{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:24px;
        margin-top:24px;
    }

    @media(max-width:767px){
        .cols2{
            grid-template-columns:repeat(1, 1fr);
        }

        body{
            padding:16px;
        }
    }
`