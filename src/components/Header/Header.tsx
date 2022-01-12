import { ReactNode, useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import moonImg from "../../assets/moon.png";
import sunImg from "../../assets/sun.png";
import logoImg from "../../assets/logo.svg";
import { RoomCode } from "../RoomCode";

import { HeaderStyled } from "./styles";

interface IHeaderProps {
  code: string;
  children?: ReactNode;
  toggleTheme(): void;
}

export function Header({ code, children, toggleTheme }: IHeaderProps) {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderStyled>
      <header>
        <div className="content">
          <img src={logoImg} alt="This is te icon from the page" />

          <div>
            <RoomCode code={code} />
            {children}
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              handleDiameter={30}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              uncheckedIcon={false}
              onColor="#835afd"
              offColor="#744253"
              height={20}
              width={48}
              uncheckedHandleIcon={
                <img
                  src={sunImg}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              }
              checkedHandleIcon={
                <img
                  src={moonImg}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              }
            />
          </div>
        </div>
      </header>
    </HeaderStyled>
  );
}
