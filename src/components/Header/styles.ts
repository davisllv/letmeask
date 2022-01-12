import styled from "styled-components";

export const HeaderStyled = styled.div`
header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
    box-shadow: 0 2px 12px rgba(200, 0, 0, 0.2);
    background: ${props => props.theme.colors.primary};

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }
`