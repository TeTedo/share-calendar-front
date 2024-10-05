import React from "react";
import { useNavigate } from "react-router-dom";

export const useLoginCheck = () => {
  const nav = useNavigate();

  const refreshToken = localStorage.getItem("refresh");

  if (refreshToken === null) {
    nav("landing");
  }
  return <div>useLoginCheck</div>;
};
