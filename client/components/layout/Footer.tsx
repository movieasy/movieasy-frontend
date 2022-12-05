import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    background-color: blueviolet;
  `,
};

export default function Footer() {
  return <Style.Wrapper>푸터</Style.Wrapper>;
}
