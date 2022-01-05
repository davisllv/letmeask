import { useParams } from "react-router-dom";

import logoImg from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { user } = useAuth();

  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          <span>
            {questions.length > 0 ? (
              <span>{questions.length} pergunta(s)</span>
            ) : (
              <span>0 perguntas</span>
            )}
          </span>
        </div>

        <div className="question-list">
          {questions.map((questions) => {
            return (
              <Question
                key={questions.id}
                content={questions.content}
                author={questions.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
