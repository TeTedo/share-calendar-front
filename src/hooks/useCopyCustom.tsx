import React from "react";
import { useToastCustom } from "./toast/useToastCustom";

export const useCopyCustom = () => {
  const toast = useToastCustom();

  return async (copyText: string, comment: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      toast(`${comment}`, "success");
    } catch (e) {
      toast("복사에 실패하였습니다", "error");
    }
  };
};
