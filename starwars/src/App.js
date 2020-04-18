import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import Button from "./components/Button";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const nextPage = () => {
    setPage(page + 1);
    if (page >= 25) {
      setPage(25);
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
  };

  console.log(page);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        console.log(res.data.info);
        const data = res.data.results;
        setCharacters(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  console.log("Characters", characters);

  return (
    <div>
      <Wrapper className="App">
        <Header className="Header">Characters</Header>
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </Wrapper>
      <ButtonWrapper>
        <Button type={"Prev Page"} onClick={prevPage} />
        <Button type={"Next Page"} onClick={nextPage} />
      </ButtonWrapper>
    </div>
  );
};

export default App;
