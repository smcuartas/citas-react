import styled from "styled-components";

export const PatientHeader = styled.div`
    background: white;
    padding: 32px;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
`

export const PatientCard = styled.div`
    padding: 32px;
    background: white;
    margin-top: 24px;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
`

export const IDPatient = styled.p`
    text-align: right;
    margin-bottom: 8px;
    color: #bebebe;
`

export const BoldTxt = styled.span`
    font-weight: bold;
`

export const ButtonArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 8px;
    margin-top: 16px;
`

export const Edit = styled.input`
    width: 100%;
    padding: 5px 15px;
    color: white;
    border: 1px solid #57CFFF;
    background: #57CFFF;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition-duration: .3s;
    box-sizing: border-box;

    &:hover{
        border-color: black;
        background: transparent;
        color: black;
    }
`

export const Delete = styled.input`
    width: 100%;
    padding: 5px 15px;
    color: white;
    border: 1px solid #8A0501;
    background: #8A0501;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition-duration: .3s;
    box-sizing: border-box;

    &:hover{
        border-color:black;
        background:transparent;
        color:black;
    }
`