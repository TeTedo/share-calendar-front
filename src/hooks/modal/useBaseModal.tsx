import { BaseModal } from "components/modal/BaseModal";
import React, { ReactNode, useState } from "react";

interface UseBaseModalProps {
  children: ReactNode[];
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
  const [currentConfirmStep, setCurrentConfirmStep] = useState<number>(0);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  const closeAllModals = () => {
    setIsOpen(false);
    setIsConfirmOpen(false);
    setCurrentConfirmStep(0); // Reset steps
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

  const moveNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const movePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      if (currentConfirmStep < confirmationSteps.length - 1) {
        setCurrentConfirmStep((prev) => prev + 1);
      } else {
        setIsOpen(false);
        setIsConfirmOpen(false);
        closeCallBack();
        setCurrentConfirmStep(0); // Reset the confirmation steps
        setCurrentStep(0);
      }
    } else {
      setIsConfirmOpen(false);
      setCurrentConfirmStep(0); // Reset the confirmation steps if cancelled
    }
  };

  const modal =
    isOpen && children[currentStep] ? (
      <BaseModal
        children={children[currentStep]}
        closeCallBack={closeModal}
        isBackgroundBlack={isBackgroundBlack}
        isCenter={isCenter}
      />
    ) : null;

  const confirmModal =
    isConfirmOpen && confirmationSteps[currentConfirmStep] ? (
      <BaseModal
        children={confirmationSteps[currentConfirmStep]} // Render current confirmation step
        closeCallBack={() => handleConfirmation(false)} // Cancel confirmation
        isBackgroundBlack={true}
        isCenter={true}
      />
    ) : null;

  return {
    modal,
    confirmModal,
    setIsOpen,
    handleConfirmation,
    moveNextStep,
    movePrevStep,
    closeAllModals,
  };
};
