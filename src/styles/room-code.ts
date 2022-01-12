import styled from "styled-components";

export const RoomCodeStyled = styled.div` 
.room-code {
  height: 40px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  cursor: pointer;

  display: flex;

  div {
  background: ${props => props.theme.colors.secondary};
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}

  span {
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 230px;
  font-size: 14px;
  font-weight: 500;
}
}
`