import React, { useReducer, useState } from "react";
import styled from "styled-components";
import MyButton from "../button/MyButton";

const reduce = (state, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "plusSum":
      const plus = action.payload + action.payload;
      return plus;

    case "minusSum":
      const minus = action.payload - action.payload;
      return minus;

    case "multiplication":
      const multiplication = action.payload * action.payload;
      return multiplication;

      case "division":
        const divisionSum = action.payload / action.payload;
        return divisionSum

    default:
      break;
  }
};

const Main = () => {
  const [calculate, dispatch] = useReducer(reduce, { value: 0 });
  const [inputValue, setInputValue] = useState("");
//   const [value, setValue] = useState([]);

//   const valueTitle = () => {
//     const obj = {
//       inputValue,
//     };
//     setValue([...value, obj]);
//   };

  const plusSum = () => {
    dispatch({ type: "plusSum", payload: +inputValue });
  };

  const minusSum = () => {
    dispatch({ type: "minusSum", payload: +inputValue });
  };

  const multiplicationSum = () => {
    dispatch({ type: "multiplication", payload: +inputValue });
  };

  const titleInput = (e) => {
    setInputValue(e.target.value);
  };

  const divisionSum = () =>{
    dispatch({ type: "division", payload: +inputValue });

  }
  return (
    <>
      <Container>
        <Title>{calculate}</Title>
        <StyledInput
          type="number"
          dispatch={calculate}
          value={inputValue}
          onChange={titleInput}
        />
        <ContainerBtn>
          <MyButton onClick={plusSum}>+</MyButton>
          <MyButton onClick={minusSum}>-</MyButton>
          <MyButton onClick={multiplicationSum}>*</MyButton>
          <MyButton onClick={divisionSum}>/</MyButton>
        </ContainerBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border-radius: 40px;
background-color: #b98736;
`;

const StyledInput = styled.input`
  width: 240px;
  height: 20px;
  border-radius: 10px;
  padding: 5px;
`;
const Title = styled.h2`
font-size: 2rem;
  color: white
`;

const ContainerBtn = styled.div`
    /* gap: 2rem; */
    width: 500px;
    display: flex;
    justify-content: space-around;
`
export default Main;
