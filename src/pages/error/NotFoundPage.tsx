import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("/landing");
  }, []);
  return <div>NotFoundPage</div>;
};
