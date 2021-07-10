import React from "react";
import { Alert } from "react-bootstrap";
import MultiselectQuestion from "./MultiselectQuestion";
import RankQuestion from "./RankQuestion";
import SingleSelectQuestion from "./SingleSelectQuestion";

export default function QuestionCategory(props) {

  const { questions, type } = props;
  const updateQuestionAnswer = (questionIndex, value) => {
    let newQuestionVal = {
      ...questions[questionIndex],
      value: value
    };
    let newVal = [...questions];
    newVal[questionIndex] = newQuestionVal;
    props.setAnswers(newVal);
  }
  switch (type) {
    case "MULTISELECT":
      return (
        <div className="collection-category">
          {questions.map((question, index) => {
            return <MultiselectQuestion key={index} question={question} updateFunc={(val) => updateQuestionAnswer(index, val)} />
          }
          )}
        </div>
      );
    case "RANKING":
      return (
        <div className="collection-category">
          {questions.map((question, index) => {
            return <RankQuestion key={index} uniqueId={index} question={question} updateFunc={(val) => updateQuestionAnswer(index, val)} />
          }
          )}
        </div>
      )
    case "SINGLESELECT":
      return (
        <div className="collection-category">
          {questions.map((question, index) => {
            return <SingleSelectQuestion key={index} uniqueId={index} question={question} updateFunc={(val) => updateQuestionAnswer(index, val)} />
          })}
        </div>
      )
    default:
      console.error(new Error("Unexpected Question type " + type));
      return (<Alert variant="danger">Unexpected Error</Alert>)
  }
}