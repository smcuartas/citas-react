import styled from "styled-components";

export const FormCol = styled.div`
    background: white;
    padding: 32px;
    box-shadow:0 0 5px rgba(0,0,0,.15);
    position:sticky;
    top:16px;
`

export const Form = styled.form`
    margin-top: 16px;

    & input,
    & textarea{
        width: 100%;
        padding: 10px 5px;
        box-sizing: border-box;
    }

    & input:not(:last-child){
        margin-bottom:5px;
    }

    & input[type="submit"]{
        background:#57CFFF;
        color:white;
        border:1px solid #57CFFF;
        text-transform:uppercase;
        letter-spacing:2px;
        transition-duration:.3s;
        cursor:pointer;
    }

        & input[type="submit"]:hover{
            border-color:black;
            color:black;
            background:transparent;
        }
`

export const InputError = styled.p`
        padding: 10px 20px;
        width: 100%;
        background: #8A0501;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        box-sizing: border-box;
        text-align: center;
        margin-bottom: 16px;
        font-size:12px;
`