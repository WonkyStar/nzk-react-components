import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: #341644;
  border-radius: 45px;
  padding-bottom: 15px;
  padding: 20px 40px;
  max-width: 760px;
  box-shadow: 0 -5px 0 #531d75, 0 10px 0 #1c042b, 0 14px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: #fff;
  display: inline-flex;
  flex-direction: column;
  min-width: 340px;
`;

export const Title = styled.div`
  color: #fff;
  font-family: "Rammetto One";
  text-align: center;
  font-size: 26px;
  margin-bottom: 10px;
`;

export const Content = styled.div<{ $hasError: boolean }>`
  background-color: #ffffff0a;
  flex: 1;
  border-radius: 20px;
  font-size: 18px;
  height: 100%;
  padding: 20px 15px;
  ${(props) =>
    props.$hasError &&
    css`
      box-shadow: 0px 0px 3px 1px #ff000055;
    `}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  > * {
    margin-right: 10px;
  }
  > :last-child {
    margin-right: 0;
  }
`;

export const QuitButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(11px, -16px);
`;

