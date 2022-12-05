import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useToggleRegister } from "../shared/useToggleModal";
import Image from "next/image";

type Props = {
  modalType?: ModalType;
};

type ModalType = "LOGIN" | "REGISTER";

const Style = {
  Wrapper: styled.div``,
  CloseBtn: styled.button`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 16px 16px 0px 0px;
  `,
};

export default function LoginModal({
  modalType: modalTypeProp = "REGISTER",
}: Props) {
  const { isOpenRegisterModal, closeRegister } = useToggleRegister();
  const [modalType, setModalType] = useState<ModalType>(modalTypeProp);

  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.579)",
          zIndex: "9999999",
        },
        content: {
          margin: "0 auto",
          marginTop: "12%",
          padding: 0,
          width: "480px",
          height: "600px",
          borderRadius: "5px",
          boxShadow: "3px 3px 20px 0 rgba(0, 0, 0, 0.25)",
          overflowY: "scroll",
          backgroundColor: "#fff",
        },
      }}
      //   isOpen={isOpenLoginModal}
      isOpen={true}
      onRequestClose={closeRegister}
      className="MODAL"
    >
      <Style.Wrapper>
        <Style.CloseBtn onClick={closeRegister}>
          <Image
            src="/close-button.svg"
            alt="close"
            width="18"
            height="18"
            style={{ cursor: "pointer" }}
          />
        </Style.CloseBtn>
        {modalType === "REGISTER" ? <>회원가입</> : <LoginModal />}
      </Style.Wrapper>
    </Modal>
  );
}
