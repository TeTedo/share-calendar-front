import React, { ChangeEvent, useState } from "react";
import { Style } from "./PatchMyInfoModal.style";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { usePatchMemberInfo } from "hooks/api/member/usePatchMemberInfo";
import { useSetRecoilState } from "recoil";
import { memberState } from "state/recoil/memberState";
interface FileWithPreview {
  file: File;
  previewURL: string;
}

interface IPatchMyInfoModalProps {
  member: IMemberDto;
  closeAllModals: () => void;
}
export const PatchMyInfoModal = ({
  member,
  closeAllModals,
}: IPatchMyInfoModalProps) => {
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(
    null
  );
  const [name, setName] = useState<string>(member.name);
  const setRecoilMember = useSetRecoilState(memberState);

  const toast = useToastCustom();

  const { mutate } = usePatchMemberInfo();

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

  const changeMemberProfile = () => {
    if (!selectedFile?.file && name === member.name) {
      toast("변경사항이 없습니다!", ToastType.WARNING);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile?.file ? selectedFile!.file : "");
    formData.append("name", name);

    const data = {
      formData,
    };

    mutate(data, {
      onSuccess: (response) => {
        setRecoilMember(response.member);
        toast("유저 프로필 수정 성공!!", ToastType.SUCCESS);
        closeAllModals();
      },
      onError: () => {
        toast("유저 프로필 수정에 실패했습니다!", ToastType.ERROR);
      },
    });
  };

  return (
    <Style.Wrapper>
      <Style.Top>
        <div>유저 프로필 수정하기</div>
        <div>그룹에 참가신청할때 유저 프로필로 신청하게됩니다.</div>
      </Style.Top>
      <Style.Body>
        <Style.ImgContainer onClick={handleClick}>
          {selectedFile ? (
            <Style.PreviewImage src={selectedFile.previewURL} alt="Preview" />
          ) : (
            <Style.PreviewImage src={member.profileImg} alt="Preview" />
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Style.NameContainer>
      </Style.Body>
      <Style.Bottom>
        <Style.Btn onClick={changeMemberProfile}>변경</Style.Btn>
      </Style.Bottom>
    </Style.Wrapper>
  );
};
