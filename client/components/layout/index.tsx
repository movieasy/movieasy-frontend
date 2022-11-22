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
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Main: styled.main`
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    border: 1px solid blue;
  `,
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <Style.Wrapper>
      <Header />
      <Style.Main>{children}</Style.Main>
      <Footer />
    </Style.Wrapper>
  );
}
