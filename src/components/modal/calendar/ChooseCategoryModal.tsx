import React, { Dispatch, SetStateAction, useState } from "react";
import { Style } from "./CalendarModal.style";

import { useGetCategoriesByGroup } from "hooks/api/category/useGetCategoriesByGroup";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";

interface IChooseCategoryModalProps {
  moveNextStep: () => void;
  movePrevStep: () => void;
  setSelectedCategory: Dispatch<SetStateAction<ICategoryDto | undefined>>;
  selectedCategory: ICategoryDto | undefined;
  selectedGroupCategory: IGroupCategoryDto | undefined;
}
export const ChooseCategoryModal = ({
  moveNextStep,
  movePrevStep,
  setSelectedCategory,
  selectedCategory,
  selectedGroupCategory,
}: IChooseCategoryModalProps) => {
  const toast = useToastCustom();

  const moveNextStepHandler = () => {
    if (!selectedCategory) {
      toast("카테고리를 선택해야 합니다.", ToastType.ERROR);
      return;
    }
    moveNextStep();
  };
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Header>새로운 일정 추가</Style.Header>
        <Style.Body>
          <Style.BodyTitle>카테고리 선택</Style.BodyTitle>
          <Style.CategorySelectBox>
            {selectedGroupCategory?.categoryList.map((category) => (
              <Style.CategoryContainer
                key={category.categoryId}
                onClick={() => setSelectedCategory(category)}
                $isSelected={
                  selectedCategory?.categoryId === category.categoryId
                }
                $mainColor={category.categoryMainColor}
              >
                <div></div>
                <div>
                  <div>{category.categoryName}</div>
                </div>
              </Style.CategoryContainer>
            ))}
          </Style.CategorySelectBox>
          <Style.BtnWrapper>
            <Style.NextBtn onClick={() => movePrevStep()}>이전</Style.NextBtn>
            <Style.NextBtn
              $isSelected={
                selectedCategory !== undefined && selectedCategory !== null
              }
              onClick={() => moveNextStepHandler()}
            >
              다음
            </Style.NextBtn>
          </Style.BtnWrapper>
        </Style.Body>
      </Style.Container>
    </Style.Wrapper>
  );
};
