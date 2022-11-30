import styled from "styled-components";
import { Hover, Text } from "../ui";

const Style = {
  Wrapper: styled.div`
    width: 1000px;
    min-width: 1000px;
    height: 20px;
    display: flex;
    align-items: center;
    /* border: 10px solid purple; */
  `,
  Sign: styled.div`
    display: flex;
    align-items: flex-end;
    /* border: 1px solid red; */
  `,
  Boundary: styled.div`
    width: 350px;
    height: 2px;
    background-color: #ffffff;
    opacity: 0.3;
    border-radius: 0px;
  `,
  Menu: styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
};

export default function Nav() {
  return (
    <Style.Wrapper>
      <Style.Boundary />

      <Style.Menu>
        <Hover>
          <Text.Menu pointer>영화</Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer>검색</Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer>예매</Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer>CGV</Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer>롯데시네마</Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer>MEGA BOX</Text.Menu>
        </Hover>
      </Style.Menu>
      <Style.Boundary />
    </Style.Wrapper>
  );
}
