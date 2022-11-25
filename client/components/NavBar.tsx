import styled from "styled-components";
import { Hover, Text } from "./ui";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    /* border: 1px solid purple; */
  `,
  Boundary: styled.div`
    width: 50%;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.3;
    margin: 10px 0px;
  `,
  Menu: styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
};

export default function NavBar() {
  return (
    <Style.Wrapper>
      <Text.Title> MOVIEASY</Text.Title>
      <Style.Boundary />

      <Style.Menu>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            영화
          </Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            검색
          </Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            예매
          </Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            CGV
          </Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            롯데시네마
          </Text.Menu>
        </Hover>
        <Hover>
          <Text.Menu pointer color="opacityWhite">
            MEGA BOX
          </Text.Menu>
        </Hover>
      </Style.Menu>
    </Style.Wrapper>
  );
}
