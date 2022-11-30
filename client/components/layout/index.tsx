import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";

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
  HomeHeader: styled.main`
    width: 1000px;
    height: 100vh;
    position: absolute;
    /* border: 10px solid green; */
  `,
};

export default function Layout({ children }: Props): JSX.Element {
  return <Style.Wrapper>{children}</Style.Wrapper>;
}
