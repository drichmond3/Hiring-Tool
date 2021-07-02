import React, { useState } from "react";
import "./QuizPage.css";
import { Alert } from "react-bootstrap";
import QuestionCategory from "./QuestionCategory";

export default function QuizPage(props) {
  let [questionCategoryId, setQuestionId] = useState(0);

  let questionCategory = props.questions[questionCategoryId];
  return (
    <div className="data-collection">
      {renderQuestion(questionCategory.category, questionCategory.prompt, questionCategory.type, questionCategory.questions)}
      <div> padding </div>
    </div>
  )
}

const renderQuestion = (category, prompt, type, questions) => {
  if (type === "MULTISELECT") {
    return (
      <QuestionCategory category={category} prompt={prompt} type={type} questions={questions} />
    );
  } else {
    console.error(new Error("Unexpected Question type " + type));
    return (<Alert variant="danger">Unexpected Error</Alert>)
  }
}