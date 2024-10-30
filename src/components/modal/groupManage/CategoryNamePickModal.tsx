import React, { Dispatch, SetStateAction } from "react";
import { Style } from "./AddCategoryModal.style";

interface ICategoryNamePickModalProps {
  moveNextStep: () => void;
  setCategoryName: Dispatch<SetStateAction<string>>;
}

export const CategoryNamePickModal = ({
  moveNextStep,
  setCategoryName,
}: ICategoryNamePickModalProps) => {
  return (
    <Style.Wrapper>
      <div>
        <Style.Title>카테고리 이름</Style.Title>
        <Style.NameInput
          type="text"
          placeholder="카테고리 이름을 작성해주세요."
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>
      <Style.BtnWrapper>
        <div onClick={() => moveNextStep()}>다음</div>
      </Style.BtnWrapper>
    </Style.Wrapper>
  );
};
