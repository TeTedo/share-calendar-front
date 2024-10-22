import React from "react";
import { ScheduleAtomWrapper } from "./atom.style";

export const ScheduleAtom = ({
  mainColor = "#9D9D9D",
  subColor = "#E8E8E8",
  isTextCenter = true,
  height = "100%",
  width = "100%",
  fontSize = "10px",
  children,
  onClick,
}: {
  mainColor?: string;
  subColor?: string;
  isTextCenter?: boolean;
  height?: string;
  width?: string;
  fontSize?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <ScheduleAtomWrapper
      $mainColor={mainColor}
      $subColor={subColor}
      $isTextCenter={isTextCenter}
      $height={height}
      $width={width}
      $fontSize={fontSize}
      onClick={onClick ? onClick : () => {}}
    >
      <div></div>
      <div>{children}</div>
    </ScheduleAtomWrapper>
  );
};
