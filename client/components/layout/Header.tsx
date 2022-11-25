import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
    /* background-color: black; */
    /* background-image: url(https://source.unsplash.com/random); */
    background-image: url("background.jpeg");
    background-size: 100% 100%;
  `,
};

export default function Header() {
  return <Style.Wrapper>배너 들어갈 헤더</Style.Wrapper>;
}
