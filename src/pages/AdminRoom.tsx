import { useHistory, useParams } from "react-router-dom";

import deleteImg from "../assets/delete.svg";
import checkImg from "../assets/check.svg";
import answerImg from "../assets/answer.svg";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";

import { database } from "../services/firebase";
import { Header } from "../components/Header";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestions(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighligthed: true,
    });
  }

  return (
    <div id="page-room">
      <Header code={roomId}>
        <Button isOutlined onClick={handleEndRoom}>
          Encerrar Sala
        </Button>
      </Header>

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
                isAnswered={questions.isAnswered}
                isHighligthed={questions.isHighligthed}
              >
                {!questions.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        handleCheckQuestionAsAnswered(questions.id)
                      }
                    >
                      <img src={checkImg} alt="Check question" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestions(questions.id)}
                    >
                      <img src={answerImg} alt="Destact question" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(questions.id)}
                >
                  <img src={deleteImg} alt="Delete question" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
