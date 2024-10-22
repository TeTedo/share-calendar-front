import React, { useState } from "react";
import { Style } from "./CalendarModal.style";

import categoryList from "components/calendar/categoryDummy.json";

export const ChooseCategoryModal = ({
  moveNextStep,
  movePrevStep,
}: {
  moveNextStep: () => void;
  movePrevStep: () => void;
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Header>새로운 일정 추가</Style.Header>
        <Style.Body>
          <Style.BodyTitle>카테고리 선택</Style.BodyTitle>
          <Style.CategorySelectBox>
            {categoryList.map((category) => (
              <Style.CategoryContainer
                key={category.categoryId}
                onClick={() => setSelectedCategoryId(category.categoryId)}
                $isSelected={selectedCategoryId === category.categoryId}
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
              $isSelected={selectedCategoryId.length > 0}
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
