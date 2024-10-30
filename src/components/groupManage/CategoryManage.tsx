import React from "react";
import { Style } from "./GroupManage.style";

interface ICategoryManageProps {
  categoryList: ICategoryDto[];
}
export const CategoryManage = ({ categoryList }: ICategoryManageProps) => {
  return (
    <Style.CategorySetting>
      {categoryList.map((category) => (
        <Style.CategorySettingDetail>
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
        <Style.CategoryLeft>
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
  );
};
