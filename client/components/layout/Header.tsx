import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60vh;
    background-color: yellowgreen;
  `,
};

export default function Header() {
  return <Style.Wrapper>배너 들어갈 헤더</Style.Wrapper>;
}
