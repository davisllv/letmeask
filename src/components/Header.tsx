import { ReactNode } from "react";
import logoImg from "../assets/logo.svg";
import { RoomCode } from "./RoomCode";

import "../styles/room.scss";

interface IHeaderProps {
  code: string;
  children?: ReactNode;
}

export function Header({ code, children }: IHeaderProps) {
  return (
    <header>
      <div className="content">
        <img src={logoImg} alt="" />
        <div>
          <RoomCode code={code} />
          {children}
        </div>
      </div>
    </header>
  );
}
