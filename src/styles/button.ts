import styled from "styled-components";

export const ButtonStyled = styled.div`
.button {
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

cursor: pointer;
border: 0;

transition: 0.2;

  img {
  margin - right: 8px;
}

  &.outlined {
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
}

  &: not(: disabled):hover {
  filter: brightness(0.9);
}

  & disabled {
  opacity: 0.6;
  cursor: not - allowed;
}
}
`