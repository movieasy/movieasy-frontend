import styled from "styled-components";
import { Text } from "../components/ui";

const Style = {
  Wrapper: styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
  `,
};

const Index = () => {
  return (
    <Style.Wrapper>
      <Text.Title>메인</Text.Title>
    </Style.Wrapper>
  );
};

export default Index;
