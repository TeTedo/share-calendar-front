import React from "react";
import { Style } from "./GroupManage.style";
import { useGetGroupApplication } from "hooks/api/apply/useGetGroupApplication";
import { useBaseModal } from "hooks/modal/useBaseModal";
import { useProcessApply } from "hooks/api/apply/useProcessApply";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useQueryClient } from "@tanstack/react-query";

interface IApplyManageProps {
  groupUuid: string;
}

export const ApplyManage = ({ groupUuid }: IApplyManageProps) => {
  const queryClient = useQueryClient();
  const { data } = useGetGroupApplication(groupUuid);

  const { mutate } = useProcessApply(groupUuid);
  const toast = useToastCustom();
  const processApplyHandler = (groupApplicationId: number, accept: boolean) => {
    const data: IProcessApplyRequest = {
      groupApplicationId,
      acceptState: accept ? "ACCEPT" : "REFUSE",
    };
    mutate(data, {
      onSuccess: (response) => {
        const isAcceptMsg = data.acceptState === "ACCEPT" ? "승인" : "거절";
        toast(`${isAcceptMsg} 처리 완료!!`, ToastType.SUCCESS);
        queryClient.invalidateQueries({
          queryKey: [`group-application/${groupUuid}`],
        });
      },
      onError: (e) => {
        toast("처리 실패!!" + e.message, ToastType.ERROR);
      },
    });
  };
  return (
    <Style.CategorySetting>
      {data &&
        data.list.map((application) => (
          <Style.GroupSettingDetail key={application.groupApplicationId}>
            <Style.GroupLeft>
              <img src={application.invitedMember.profileImg} alt="프로필" />
              <div>{application.invitedMember.name}</div>
            </Style.GroupLeft>
            <Style.GroupRight>
              <Style.RightBtnContainer>
                <div
                  onClick={() =>
                    processApplyHandler(application.groupApplicationId, true)
                  }
                >
                  승인{" "}
                </div>
                <div
                  onClick={() =>
                    processApplyHandler(application.groupApplicationId, false)
                  }
                >
                  거절
                </div>
              </Style.RightBtnContainer>
            </Style.GroupRight>
          </Style.GroupSettingDetail>
        ))}
    </Style.CategorySetting>
  );
};
