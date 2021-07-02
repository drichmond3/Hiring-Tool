import React, { useState } from "react";
import MultiselectQuestion from "./MultiselectQuestion";
import { Alert } from "react-bootstrap";

export default function QuestionCategory(props) {
  let [questions, setQuestions] = useState(props.questions.map((question) => ({ question: question, value: [] })));
  const { category, prompt, type } = props;

  const updateQuestionAnswer = (questionIndex, value) => {
    let newQuestionVal = {
      ...questions[questionIndex],
      value: value
    };
    let newVal = [...questions];
    newVal[questionIndex] = newQuestionVal;
    setQuestions(newVal);
  }

  return (
    <>
      <div>
        <h3>{category}</h3>
        <p>{prompt}</p>
      </div>
      {renderQuestions(type, questions, updateQuestionAnswer)}
    </>
  )
}


const renderQuestions = (type, questions, updateFunc) => {
  if (type === "MULTISELECT") {
    return (
      <>
        {questions.map((question, index) =>
          <MultiselectQuestion key={index} question={question.question} value={question.value} updateFunc={(val) => updateFunc(index, val)} />
        )}
      </>
    );
  } else {
    console.error(new Error("Unexpected Question type " + type));
    return (<Alert variant="danger">Unexpected Error</Alert>)
  }
}