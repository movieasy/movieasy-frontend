import { Margin, Text } from "../ui";
import styled from "styled-components";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import RegisterModal from "../RegisterModal";

const LoginModal = dynamic(import("../LoginModal"), {
  ssr: false,
});

// const RegisterModal = dynamic(import("../RegisterModal"), {
//   ssr: false,
// });

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
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const handleOpenLoginModal = useCallback(() => {
    console.log(isOpenLoginModal);
    setIsOpenLoginModal(!isOpenLoginModal);
  }, [isOpenLoginModal]);

  // const handleOpenRegisterModal = useCallback(() => {
  //   console.log(isOpenRegisterModal);
  //   setIsOpenRegisterModal(!isOpenRegisterModal);
  // }, [isOpenRegisterModal]);

  // const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  // const handleOpenRegisterModal = useCallback(() => {
  //   setIsOpenRegisterModal(!isOpenRegisterModal);
  // }, [isOpenRegisterModal]);

  return (
    <Style.Wrapper>
      <LoginModal />
      <RegisterModal />
      <Text.Title> MOVIEASY</Text.Title>
      <Style.Sign>
        <Text.Minitext pointer onClick={handleOpenLoginModal}>
          로그인
        </Text.Minitext>
        <Margin direction="row" size={8} />
        <Text.Minitext pointer>회원가입</Text.Minitext>
      </Style.Sign>
    </Style.Wrapper>
  );
}

/* background-image: url(https://source.unsplash.com/random); */
/* background-image: url("background.jpeg"); */
