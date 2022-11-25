import Layout from "../components/layout";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 3px solid red; */
  `,
  Header: styled.div`
    width: 100%;
    height: 90%;
    background: linear-gradient(
      to bottom,
      #111111 0%,
      rgba(0, 0, 0, 0.15) 35%,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.05) 65%,
      rgba(0, 0, 0, 0.25) 75%,
      #000000 100%
    );
    /* url(https://source.unsplash.com/random);
    background-size: cover; */
    /* border: 1px solid yellow; */
  `,
  Content: styled.div`
    width: 100%;
    height: 40%;
    background-color: black;
    /* border: 1px solid red; */
  `,
};

const Index = () => {
  return (
    <>
      <Layout>
        <Style.Wrapper>
          <Style.Header>
            <NavBar />
          </Style.Header>
          <Style.Content>영화순위보여지는곳</Style.Content>
        </Style.Wrapper>
      </Layout>
    </>
  );
};

export default Index;
