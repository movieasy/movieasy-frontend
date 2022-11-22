import Layout from "../components/layout";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 80vh;
    border: 10px solid black;
  `,
};

const Index = () => {
  return (
    <>
      <Layout>
        <Style.Wrapper>본격적인내용 = children</Style.Wrapper>
      </Layout>
    </>
  );
};

export default Index;
