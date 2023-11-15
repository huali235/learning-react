import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz context was used outside of QuizProvider");
  return context;
}
