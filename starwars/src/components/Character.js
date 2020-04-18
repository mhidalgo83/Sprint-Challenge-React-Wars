// Write your Character component here
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 25%;
  border-radius: 50%;
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);
`;

const Header = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 1.4rem;
`;

const Wrapper = styled.div`
  width: 31%;
  background: white;
  margin: 2% auto;
  border-radius: 5px;
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.5);

  @keyframes animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-duration: 1s;
  animation-name: animation;
  
`;

const Para = styled.p`
  text-align: center;
  border-top: 1px solid gray;
  margin: 3% auto;
  width: 80%;
  padding-top: 2%;
`;

const Character = (props) => {
  return (
    <Wrapper>
      <Header>{props.character.name}</Header>
      <Image src={props.character.image} alt={props.character.name} />
      <Para>Species: {props.character.species}</Para>
      <Para>Status: {props.character.status}</Para>
      <Para>Location: {props.character.location.name}</Para>
    </Wrapper>
  );
};

export default Character;
