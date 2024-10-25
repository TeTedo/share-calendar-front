import React, { Dispatch, SetStateAction, useState } from "react";
import { Style } from "./CalendarModal.style";

import categoryList from "components/calendar/categoryDummy.json";
import { useGetCategoriesByGroup } from "hooks/api/category/useGetCategoriesByGroup";

export const ChooseCategoryModal = ({
  moveNextStep,
  movePrevStep,
  selectedGroup,
  setSelectedCategory,
  selectedCategory,
}: {
  moveNextStep: () => void;
  movePrevStep: () => void;
  selectedGroup: IGroupDto;
  setSelectedCategory: Dispatch<SetStateAction<ICategoryDto | undefined>>;
  selectedCategory: ICategoryDto | undefined;
}) => {
  const { data } = useGetCategoriesByGroup(selectedGroup.groupId);

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Header>새로운 일정 추가</Style.Header>
        <Style.Body>
          <Style.BodyTitle>카테고리 선택</Style.BodyTitle>
          <Style.CategorySelectBox>
            {data?.categoryList.map((category) => (
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
              onClick={() => moveNextStep()}
            >
              다음
            </Style.NextBtn>
          </Style.BtnWrapper>
        </Style.Body>
      </Style.Container>
    </Style.Wrapper>
  );
};
