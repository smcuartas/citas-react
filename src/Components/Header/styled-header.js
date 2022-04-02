import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    background: white;
    overflow:hidden;
    position:relative;
    width:100%;
    box-shadow:0 0 5px rgba(0,0,0,.15);
`

export const AnimatedBar = styled.div`
    width: 250px;
    height: 5px;
    border-radius:50%;
    background-color: #57CFFF;
    position: absolute;
    animation: movebar 120s infinite;
    animation-delay: .5s;
    z-index:0;
    bottom:0;
    opacity:.3;

    @keyframes movebar{
        0%{left:0}
        50%{left:100%;}
        100%{left:0;}
    }
`

export const Content = styled.div`
    display:block;
    width:100%;
    height:100%;
    backdrop-filter:blur(5px);
    padding:32px;
`

