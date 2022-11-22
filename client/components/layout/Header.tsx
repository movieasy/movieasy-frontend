import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    background-color: yellowgreen;
  `,
};

export default function Header() {
  return <Style.Wrapper>헤더</Style.Wrapper>;
}
