import React from "react";
import styled from "styled-components";

const Btn = styled.button`
border: none;
border-radius: 25px;
padding: 1%;
margin-bottom: 2%;
transition: .3s all;
&:hover {
    cursor: pointer;
    background: slategray;
    color: white;
    box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);
}
`


const Button = props => {
    return <Btn onClick={props.onClick}>{props.type}</Btn>
}

export default Button;

