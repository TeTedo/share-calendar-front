import React, { useState } from "react";
import { Style } from "./AddGroupModal.style";
import { useSetRecoilState } from "recoil";
import { groupCategoryState } from "state/recoil/groupCategoryState";
import { useAddGroup } from "hooks/api/group/useAddGroup";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";

interface IAddGroupModalProps {
  closeAllModals: () => void;
}
export const AddGroupModal = ({ closeAllModals }: IAddGroupModalProps) => {
  const [groupName, setGroupName] = useState<string>("");

  const setGroupCategoryList = useSetRecoilState(groupCategoryState);
  const { mutate } = useAddGroup();
  const toast = useToastCustom();

  const addGroupHandler = () => {
    const data = { groupName };

    mutate(data, {
      onSuccess: (response) => {
        setGroupCategoryList((prev) => [...prev, response.groupCategory]);
        closeAllModals();
      },
      onError: (e) => {
        toast(`그룹 생성에 실패하였습니다. \n ${e.message}`, ToastType.ERROR);
      },
    });
  };
  return (
    <Style.Wrapper>
      <div>
        <div>그룹 이름</div>
        <input type="text" onChange={(e) => setGroupName(e.target.value)} />
      </div>
      <Style.AddBtn onClick={() => addGroupHandler()}>생성</Style.AddBtn>
    </Style.Wrapper>
  );
};
