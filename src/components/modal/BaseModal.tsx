import React, { ReactNode } from "react";
import { BaseModalContainer, BaseModalWrapper } from "./BaseModal.style";

export const BaseModal = ({
  children,
  closeCallBack,
  isBackgroundBlack,
  isCenter,
}: {
  children: ReactNode;
  closeCallBack: () => void;
  isBackgroundBlack: boolean;
  isCenter: boolean;
}) => {
  const closeHandler = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      closeCallBack();
    }
  };

  return (
    <BaseModalWrapper
      $isCenter={isCenter}
      $isBackgroundBlack={isBackgroundBlack}
      onClick={(event) => {
        event.preventDefault();
        closeHandler(event);
      }}
    >
      <BaseModalContainer>{children}</BaseModalContainer>
    </BaseModalWrapper>
  );
};
