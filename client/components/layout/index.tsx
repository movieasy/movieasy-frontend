import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 3px solid red; */
  `,
  Main: styled.main`
    width: 1000px;
    height: 100vh;
    background-color: gray;
    position: absolute;
    border: 1px solid green;
  `,
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <Style.Wrapper>
      <Header />
      <Style.Main>{children}</Style.Main>
    </Style.Wrapper>
  );
}
