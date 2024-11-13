import styled from "styled-components";

export const Style = {
  Wrapper: styled.div``,
  TopContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  `,

  ImgContainer: styled.div`
    position: relative;
    width: 100px;
    height: 100px;

    & > img:first-child {
      width: 100px;
      height: 100px;
    }

    & > img:last-child {
      position: absolute;
      left: 88px;
      top: 88px;

      width: 24px;
      height: 24px;
    }
  `,

  GroupMainContainer: styled.div``,
  DetailContainer: styled.div<{ $backgroundColor?: string }>`
    background-color: ${(props) => props.$backgroundColor || "white"};
    display: flex;
    align-items: center;
    padding: 7px 0;
    border: 1px solid #e5e5e5;

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 30px;
      padding-left: 70px;

      & > div:nth-child(1) {
        min-width: 70px;
        font-weight: 500;
      }

      & > div:nth-child(2) {
        color: #9d9d9d;
      }
    }
  `,

  ChooseSettingWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 30px;
  `,
  SettingBtn: styled.div<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #777;
    padding: 15px 10px;
    border-radius: 15px;

    background-color: ${(props) => (props.$isSelected ? "#777" : "white")};
    color: ${(props) => (props.$isSelected ? "white" : "black")};
    cursor: pointer;
  `,
  SettingWrapper: styled.div`
    margin-top: 30px;
  `,
  SettingTitle: styled.div`
    color: #777;
    padding-left: 10px;
    font-size: 12px;
  `,
  GroupSetting: styled.div`
    display: flex;
    flex-direction: column;
  `,
  GroupSettingDetail: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px 5px 50px;
    box-sizing: border-box;
    border-top: 1px solid #e5e5e5;
  `,
  GroupLeft: styled.div`
    display: flex;
    font-size: 14px;
    color: #9d9d9d;
    gap: 35px;

    & > img:first-child {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      overflow: hidden;
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  `,
  GroupRight: styled.div`
    & > img {
      width: 20px;
      height: 5px;
    }
  `,

  CategorySetting: styled.div`
    display: flex;
    flex-direction: column;
  `,

  CategorySettingDetail: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px 5px 50px;
    box-sizing: border-box;
    border-top: 1px solid #e5e5e5;
  `,
  CategoryLeft: styled.div<{ $mainColor?: string }>`
    display: flex;
    font-size: 14px;
    color: #9d9d9d;
    gap: 35px;

    & > div:first-child {
      width: 20px;
      height: 20px;
      background-color: ${(props) => props.$mainColor || "#E5E5E5"};
      border-radius: 5px;
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  `,
  CategoryRight: styled.div`
    & > img {
      width: 20px;
      height: 5px;
    }
  `,

  RightBtnContainer: styled.div`
    display: flex;
    gap: 20px;

    & > div {
      padding: 2px 5px;
      border: 1px solid black;
      border-radius: 12px;
      cursor: pointer;
    }
  `,
};
