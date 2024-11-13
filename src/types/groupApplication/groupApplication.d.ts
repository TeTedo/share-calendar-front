interface IApplyGroupResponse {
  msg: string;
}

type TAcceptState = "PENDING" | "ACCEPT" | "REFUSE";

interface IGroupApplicationDto {
  groupApplicationId: number;
  invitedMember: IMemberDto;
  group: IGroupDto;
  acceptMember?: IMemberDto;
  acceptState: TAcceptState;
}

interface IGetGroupApplicationResponse {
  list: IGroupApplicationDto[];
}
