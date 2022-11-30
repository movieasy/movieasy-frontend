import { Text } from "../ui";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid blue; */
  `,
  Sign: styled.div`
    width: 1000px;
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid red; */
  `,
};

export default function Header() {
  return (
    <Style.Wrapper>
      <Text.Title> MOVIEASY</Text.Title>
      <Style.Sign>
        <Text.Minitext>로그인 | 회원가입</Text.Minitext>
      </Style.Sign>
    </Style.Wrapper>
  );
}

/* background-image: url(https://source.unsplash.com/random); */
/* background-image: url("background.jpeg"); */
