// import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    /* background: linear-gradient(
      to bottom,
      #111111 0%,
      rgba(0, 0, 0, 0.15) 35%,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.05) 65%,
      rgba(0, 0, 0, 0.25) 75%,
      #000000 100%
    );
    background-image: url("background.jpeg");
    background-size: 2200px 1200px; */
  `,

  Content: styled.div`
    width: 1000px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: yellow;
  `,
};

const Index = () => {
  return (
    <>
      {/* <Layout> */}
      <RecoilRoot>
        <Style.Wrapper>
          <Header />
          <Nav />
          <Style.Content>콘텐츠 넣을 자리</Style.Content>
        </Style.Wrapper>
      </RecoilRoot>
      {/* </Layout> */}
    </>
  );
};

export default Index;
