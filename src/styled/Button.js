import styled from "styled-components";


export const Button = styled.button`
    padding: 10px 18px;
    color: #fff;
    background-color: #000;
    min-width: 220px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: .4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: .3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`;