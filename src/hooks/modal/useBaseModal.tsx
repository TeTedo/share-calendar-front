import { BaseModal } from "components/modal/BaseModal";
import React, { ReactNode, useState } from "react";

interface UseBaseModalProps {
  children: ReactNode;
  closeCallBack: () => void;
  isBackgroundBlack: boolean;
  isCenter: boolean;
  confirmationSteps?: ReactNode[];
}
export const useBaseModal = ({
  children,
  closeCallBack,
  isBackgroundBlack,
  isCenter,
  confirmationSteps = [],
}: UseBaseModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  const closeAllModals = () => {
    setIsOpen(false);
    setIsConfirmOpen(false);
    setCurrentStep(0); // Reset steps
    closeCallBack(); // Trigger any additional logic when closing
  };

  const closeModal = () => {
    if (confirmationSteps.length > 0) {
      setIsConfirmOpen(true); // Start confirmation process
    } else {
      setIsOpen(false);
      closeCallBack();
    }
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      if (currentStep < confirmationSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsOpen(false);
        setIsConfirmOpen(false);
        closeCallBack();
        setCurrentStep(0); // Reset the confirmation steps
      }
    } else {
      setIsConfirmOpen(false);
      setCurrentStep(0); // Reset the confirmation steps if cancelled
    }
  };

  const modal = isOpen ? (
    <BaseModal
      children={children}
      closeCallBack={closeModal}
      isBackgroundBlack={isBackgroundBlack}
      isCenter={isCenter}
    />
  ) : null;

  const confirmModal =
    isConfirmOpen && confirmationSteps[currentStep] ? (
      <BaseModal
        children={confirmationSteps[currentStep]} // Render current confirmation step
        closeCallBack={() => handleConfirmation(false)} // Cancel confirmation
        isBackgroundBlack={true}
        isCenter={true}
      />
    ) : null;

  return { modal, confirmModal, setIsOpen, handleConfirmation, closeAllModals };
};
