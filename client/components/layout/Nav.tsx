import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 38px;
    background-color: blanchedalmond;
  `,
};

export default function Nav() {
  return <Style.Wrapper>네비게이션</Style.Wrapper>;
}
