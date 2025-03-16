import { useState } from "react"

export default function Quiz() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answerIdx, setAnswerIdx] = useState([]);

  return <p>Current Question</p>;
}