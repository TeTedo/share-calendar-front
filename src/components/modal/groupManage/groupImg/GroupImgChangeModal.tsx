import React, { ChangeEvent, useState } from "react";
import { Style } from "./GroupImgChangeModal.style";
import { ToastType, useToastCustom } from "hooks/toast/useToastCustom";
import { useChangeGroupImg } from "hooks/api/group/useChangeGroupImg";

interface FileWithPreview {
  file: File;
  previewURL: string;
}

interface IGroupImgChangeModalProps {
  groupUuid: string;
  closeAllModals: () => void;
}

export const GroupImgChangeModal = ({
  groupUuid,
  closeAllModals,
}: IGroupImgChangeModalProps) => {
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(
    null
  );
  const toast = useToastCustom();
  const { mutate } = useChangeGroupImg(groupUuid);

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

  const changeGroupImgHandler = () => {
    if (!selectedFile?.file) {
      toast("파일을 선택하세요!", ToastType.WARNING);
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile.file);

    const data = {
      formData,
    };

    mutate(data, {
      onSuccess: (response) => {
        toast("그룹 이미지 변경 성공!!", ToastType.SUCCESS);
        closeAllModals();
      },
      onError: () => {
        toast("이미지 업로드 실패. 다시 시도해주세요.", ToastType.ERROR);
      },
    });
  };
  return (
    <Style.Wrapper>
      <Style.CircleInput onClick={handleClick}>
        {selectedFile ? (
          <Style.PreviewImage src={selectedFile.previewURL} alt="Preview" />
        ) : (
          <span>이미지를 선택하세요</span>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }} // Optionally hide the input
          onChange={handleFileChange}
        />
      </Style.CircleInput>
      <Style.CompleteButton onClick={changeGroupImgHandler}>
        그룹 이미지 변경!
      </Style.CompleteButton>
    </Style.Wrapper>
  );
};
