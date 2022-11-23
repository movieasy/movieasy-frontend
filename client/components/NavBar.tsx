import styled from "styled-components";
import { Text } from "./ui";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Boundary: styled.div`
    width: 100%;
    height: 1px;
    background-color: #c3c3c3;
  `,
};

export default function NavBar() {
  return (
    <Style.Wrapper>
      <div>
        <Text.Title> MoviEasy</Text.Title>
      </div>
      <Style.Boundary />
      <div>sss</div>
      <div>sss</div>
    </Style.Wrapper>
  );
}
