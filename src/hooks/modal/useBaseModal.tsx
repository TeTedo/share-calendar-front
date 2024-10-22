import { BaseModal } from "components/modal/BaseModal";
import React, { ReactNode, useState } from "react";

interface UseBaseModalProps {
  children: ReactNode;
  closeCallBack: () => void;
  isBackgroundBlack: boolean;
  isCenter: boolean;
}
export const useBaseModal = ({
  children,
  closeCallBack,
  isBackgroundBlack,
  isCenter,
}: UseBaseModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modal = isOpen ? (
    <BaseModal
      children={children}
      closeCallBack={() => {
        setIsOpen(false);
        closeCallBack();
      }}
      isBackgroundBlack={isBackgroundBlack}
      isCenter={isCenter}
    />
  ) : null;

  return { modal, setIsOpen };
};
