import React from "react";
import { Style } from "./GroupManage.style";

interface IApplyManageProps {
  groupId: number;
}

export const ApplyManage = ({ groupId }: IApplyManageProps) => {
  return (
    <Style.CategorySetting>
      {/* {categoryList.map((category) => (
        <Style.CategorySettingDetail key={category.categoryId}>
          <Style.CategoryLeft $mainColor={category.categoryMainColor}>
            <div></div>
            <div>{category.categoryName}</div>
          </Style.CategoryLeft>
          <Style.CategoryRight>
            <img src="/icon/detail_setting_icon.svg" alt="설정" />
          </Style.CategoryRight>
        </Style.CategorySettingDetail>
      ))} */}
    </Style.CategorySetting>
  );
};
