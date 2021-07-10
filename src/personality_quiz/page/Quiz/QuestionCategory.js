import React, { useState, useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import MultiselectQuestion from "./MultiselectQuestion";
import RankQuestion from "./RankQuestion";
import SingleSelectQuestion from "./SingleSelectQuestion";

export default function QuestionCategory(props) {
  let [questions, setQuestions] = useState(props.questions.map((question) => ({ question: question, value: [] })));
  useEffect(() => setQuestions(props.questions.map((question) => ({ question: question, value: [] }))), [props.questions]);

  const { category, prompt, type, submit, back } = props;
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
      <Card.Header>
        <h3>{category}</h3>
        <p>{prompt}</p>
      </Card.Header>
      <Card.Body className="collection-category-height">
        <div className="collection-sidebar left">
          <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" className="collection-sidebar-navButton" onClick={() => back(questions)} />
        </div>
        <div className="collection-sidebar right">
          <FontAwesomeIcon icon={faChevronCircleRight} size="3x" className="collection-sidebar-navButton" onClick={() => submit(questions)} />
        </div>
        <div className="collection-category">
          {renderQuestions(type, questions, updateQuestionAnswer)}
        </div>
      </Card.Body>
    </>
  )
}


const renderQuestions = (type, questions, updateFunc) => {
  switch (type) {
    case "MULTISELECT":
      return (
        <>
          {questions.map((question, index) => {
            return <MultiselectQuestion key={index} question={question.question} value={question.value} updateFunc={(val) => updateFunc(index, val)} />
          }
          )}
        </>
      );
    case "RANKING":
      return (
        <>
          {questions.map((question, index) => {
            let value = (question.value && question.value.length) ? [...question.value] : [...question.question.options];
            return <RankQuestion key={index} uniqueId={index} question={question.question} value={value} updateFunc={(val) => updateFunc(index, val)} />
          }
          )}
        </>
      )
    case "SINGLESELECT":
      return (
        <>
          {questions.map((question, index) => {
            return <SingleSelectQuestion key={index} uniqueId={index} question={question.question} value={question.value} updateFunc={(val) => updateFunc(index, val)} />
          })}
        </>
      )
    default:
      console.error(new Error("Unexpected Question type " + type));
      return (<Alert variant="danger">Unexpected Error</Alert>)
  }
}