import React, { Dispatch, SetStateAction } from "react";
import { Style } from "./AddCategoryModal.style";

import categoryJson from "./categoryColor.json";
import { useAddCategory } from "hooks/api/category/useAddCategory";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useRecoilState } from "recoil";
import { addCategoryToGroup, groupCategoryState } from "state/recoil/groupCategoryState";

interface ICategoryColorPickModalProps {
  movePrevStep: () => void;
  closeAllModals: () => void;
  setCategoryColorId: Dispatch<SetStateAction<number>>;
  categoryColorId: number;
  groupId: number;
  categoryName: string;
}

export const CategoryColorPickModal = ({
  movePrevStep,
  closeAllModals,
  setCategoryColorId,
  categoryColorId,
  groupId,
  categoryName,
}: ICategoryColorPickModalProps) => {
  const toast = useToastCustom();
  const { mutate } = useAddCategory(groupId);
  const [groupCategory, setGroupCategory] = useRecoilState(groupCategoryState);

  const handleAddCategory = (groupId: number, newCategory: ICategoryDto) => {
    setGroupCategory(addCategoryToGroup(groupId, newCategory));
  };

  console.log(groupCategory)
  const addCategoryHandler = () => {
    const category = categoryJson.list.find((v) => v.id === categoryColorId);

    if (!category) {
      toast("색을 선택하세요", ToastType.ERROR);
      return;
    }
    const data = {
      categoryName,
      categoryMainColor: category.mainColor,
      categorySubColor: category.subColor,
    };

    mutate(data, {
      onSuccess: (response) => {
        toast("카테고리 생성 완료", ToastType.SUCCESS);
        handleAddCategory(groupId, response.category)
        closeAllModals();
      },
      onError: (e) => {
        toast(`카테고리 생성 실패하였습니다. ${e.message}`, ToastType.ERROR);
      },
    });
  };

  return (
    <Style.Wrapper>
      <div>
        <Style.Title>카테고리 색</Style.Title>
        <Style.ColorWrapper>
          {categoryJson.list.map((category) => (
            <Style.ColorDiv
              key={category.id}
              $mainColor={category.mainColor}
              $isSelected={categoryColorId === category.id}
              onClick={() => setCategoryColorId(category.id)}
            ></Style.ColorDiv>
          ))}
        </Style.ColorWrapper>
      </div>
      <Style.BtnWrapper>
        <div onClick={() => movePrevStep()}>이전</div>
        <div onClick={() => addCategoryHandler()}>생성</div>
      </Style.BtnWrapper>
    </Style.Wrapper>
  );
};
