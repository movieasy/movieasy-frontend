import Layout from "../components/layout";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Style = {
  Wrapper: styled.div`
    width: 1000px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid red;
  `,
  Header: styled.div`
    width: 100%;
    height: 60%; // 10%만 보여지고 그 외는 투명, 내용 없음
    background-color: green;
  `,
  Content: styled.div`
    width: 100%;
    height: 40%;
    background-color: yellow;
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
