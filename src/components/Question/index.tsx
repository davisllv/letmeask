import { ReactNode } from "react";
import { QuestionStyled } from "./styles";

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighligthed?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighligthed = false,
}: QuestionsProps) {
  return (
    <QuestionStyled>
      <div
        className={`question ${isAnswered ? "answered" : ""} ${
          isHighligthed && !isAnswered ? "highligthed" : ""
        }`}
      >
        <p>{content}</p>
        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span>{author.name}</span>
          </div>

          <div>{children}</div>
        </footer>
      </div>
    </QuestionStyled>
  );
}
