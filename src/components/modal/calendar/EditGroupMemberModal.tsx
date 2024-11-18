import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Style } from "./EditGroupMemberModal.style";
import { usePatchGroupProfile } from "hooks/api/group/usePatchGroupProfile";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";

interface FileWithPreview {
  file: File;
  previewURL: string;
}

interface IEditGroupMemberModalProps {
  groupMember: IGroupMemberDto;
  currentGroup: IGroupDto;
  closeAllModals: () => void;
  setGroupMember: Dispatch<SetStateAction<IGroupMemberDto | null>>;
}

export const EditGroupMemberModal = ({
  groupMember,
  currentGroup,
  setGroupMember,
  closeAllModals,
}: IEditGroupMemberModalProps) => {
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(
    null
  );
  const [groupNickName, setGroupNickName] = useState<string>(
    groupMember.groupNickname
  );
  const toast = useToastCustom();

  const { mutate } = usePatchGroupProfile(currentGroup.groupId);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile({ file, previewURL: fileURL });
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents event from bubbling up
  };

  const changeGroupMemberProfile = () => {
    if (!selectedFile?.file && groupNickName === groupMember.groupNickname) {
      toast("변경사항이 없습니다!", ToastType.WARNING);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile?.file ? selectedFile!.file : "");
    formData.append("groupNickname", groupNickName);

    const data = {
      formData,
    };

    mutate(data, {
      onSuccess: (response) => {
        setGroupMember(response.groupMember);
        toast("그룹 프로필 수정 성공!!", ToastType.SUCCESS);
        closeAllModals();
      },
      onError: () => {
        toast("그룹 프로필 수정에 실패했습니다!", ToastType.ERROR);
      },
    });
  };

  return (
    <Style.Wrapper>
      <Style.Top>그룹 프로필 수정하기</Style.Top>
      <Style.Body>
        <Style.ImgContainer onClick={handleClick}>
          {selectedFile ? (
            <Style.PreviewImage src={selectedFile.previewURL} alt="Preview" />
          ) : (
            <Style.PreviewImage
              src={groupMember.groupProfileImg}
              alt="Preview"
            />
          )}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }} // Optionally hide the input
            onChange={handleFileChange}
          />
        </Style.ImgContainer>
        <Style.NameContainer>
          <input
            type="text"
            placeholder="변경할 닉네임을 입력하세요."
            defaultValue={groupNickName}
            onChange={(e) => setGroupNickName(e.target.value)}
          />
        </Style.NameContainer>
      </Style.Body>
      <Style.Bottom>
        <Style.Btn onClick={changeGroupMemberProfile}>변경</Style.Btn>
      </Style.Bottom>
    </Style.Wrapper>
  );
};
