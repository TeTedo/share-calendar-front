import React, { ReactNode } from "react";
import { BaseModalWrapper } from "./BaseModal.style";

export const BaseModal = ({
  children,
  closeCallBack,
  isBackgroundBlack,
}: {
  children: ReactNode;
  closeCallBack: Function;
  isBackgroundBlack: boolean;
}) => {
  return <BaseModalWrapper>BaseModal</BaseModalWrapper>;
};
