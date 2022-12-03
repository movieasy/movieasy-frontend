import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import cuid from "cuid";

export const isOpenLoginModalState = atom<boolean>({
  key: cuid(),
  default: false,
});

export const isOpenRegisterModalState = atom<boolean>({
  key: cuid(),
  default: false,
});

export function useToggleLogin() {
  const [isOpenLoginModal, set] = useRecoilState(isOpenLoginModalState);
  const openLogin = useCallback(() => set(true), [set]);
  const closeLogin = useCallback(() => set(false), [set]);
  return { isOpenLoginModal, openLogin, closeLogin };
}

export function useToggleRegister() {
  const [isOpenRegisterModal, set] = useRecoilState(isOpenRegisterModalState);
  const openRegister = useCallback(() => set(true), [set]);
  const closeRegister = useCallback(() => set(false), [set]);
  return { isOpenRegisterModal, openRegister, closeRegister };
}
