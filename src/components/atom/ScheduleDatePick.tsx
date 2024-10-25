import React, { useState } from "react";
import styled from "styled-components";

export const ScheduleDatePick = () => {
  const [selectedTime, setSelectedTime] = useState<string>("18:00"); // Initial time
  const [selectedDate] = useState(new Date()); // For demonstration

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <Container>
      <Label>시작일</Label>
      <TimeWrapper>
        <ClockIcon src="/icon/clock_icon.svg" alt="Clock icon" />
        <TimeInput
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </TimeWrapper>
      <DateText>
        {selectedDate.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </DateText>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f4f4f4;
  width: fit-content;
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-right: 10px;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
`;

const ClockIcon = styled.img`
  margin-right: 5px;
  width: 16px; /* Adjust size as needed */
  height: 16px; /* Adjust size as needed */
`;

const DateText = styled.div`
  font-size: 14px;
  color: #666;
`;

const TimeInput = styled.input`
  font-size: 14px;
  border: none;
  background: transparent;
  color: #666;
  cursor: pointer;
  padding-left: 5px;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;
