import React, { useState } from "react";
import { Style } from "../GroupManage.style";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { CancelBaseModal } from "components/modal/CancelBaseModal";
import { CategoryNamePickModal } from "components/modal/groupManage/category/CategoryNamePickModal";
import { CategoryColorPickModal } from "components/modal/groupManage/category/CategoryColorPickModal";

interface ICategoryManageProps {
  categoryList: ICategoryDto[];
  groupId: number;
}
export const CategoryManage = ({
  categoryList,
  groupId,
}: ICategoryManageProps) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryColorId, setCategoryColorId] = useState<number>(0);

  const {
    setIsOpen,
    modal,
    confirmModal,
    handleConfirmation,
    moveNextStep,
    movePrevStep,
    closeAllModals,
  } = useBaseModal({
    children: [
      <CategoryNamePickModal
        moveNextStep={() => moveNextStep()}
        setCategoryName={setCategoryName}
      />,
      <CategoryColorPickModal
        movePrevStep={() => movePrevStep()}
        closeAllModals={() => closeAllModals()}
        setCategoryColorId={setCategoryColorId}
        categoryColorId={categoryColorId}
        categoryName={categoryName}
        groupId={groupId}
      />,
    ],
    isBackgroundBlack: true,
    isCenter: true,
    confirmationSteps: [
      <CancelBaseModal
        onConfirm={(confirm: boolean) => handleConfirmation(confirm)}
        mainText="카테고리 추가를 취소하시겠습니까?"
        subText=""
      />,
    ],
  });
  return (
    <>
      {modal}
      {confirmModal}
      <Style.CategorySetting>
        {categoryList.map((category) => (
          <Style.CategorySettingDetail key={category.categoryId}>
            <Style.CategoryLeft $mainColor={category.categoryMainColor}>
              <div></div>
              <div>{category.categoryName}</div>
            </Style.CategoryLeft>
            <Style.CategoryRight>
              <img src="/icon/detail_setting_icon.svg" alt="설정" />
            </Style.CategoryRight>
          </Style.CategorySettingDetail>
        ))}

        {/* 카테고리 추가 */}
        <Style.CategorySettingDetail>
          <Style.CategoryLeft onClick={() => setIsOpen(true)}>
            <div></div>
            <div>
              카테고리 추가{" "}
              <img
                src="/icon/group_plus_icon.svg"
                alt=""
                style={{ width: "12px", height: "12px" }}
              />
            </div>
          </Style.CategoryLeft>
          <Style.CategoryRight></Style.CategoryRight>
        </Style.CategorySettingDetail>
      </Style.CategorySetting>
    </>
  );
};
