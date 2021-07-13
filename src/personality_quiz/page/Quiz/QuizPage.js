import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import "./QuizPage.css";
import QuestionCategory from "./QuestionCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";


export default function QuizPage(props) {
  let [questionCategories, setQuestionCategories] = useState(props.questionCategories);
  let [questionCategoryId, setQuestionCategoryId] = useState(0);
  useEffect(() => setQuestionCategories(props.questionCategories), [props.questionCategories]);

  let previousCategory = () => {
    if (questionCategoryId > 0) {
      setQuestionCategoryId(questionCategoryId - 1);
    }
    else {
      props.previousPage();
    }
  }

  let saveQuestionCategory = (categoryIndex, updatedQuestions) => {
    let response = [...questionCategories];
    let updatedCategory = { ...response[categoryIndex] };
    updatedCategory.questions = updatedQuestions;
    response[categoryIndex] = updatedCategory;
    setQuestionCategories(response);
  }

  let completeCategory = () => {
    if (questionCategoryId >= questionCategories.length - 1) {
      props.nextPage(questionCategories);
    } else {
      setQuestionCategoryId(questionCategoryId + 1);
    }
  }

  if (questionCategoryId <= questionCategories.length) {
    return (
      <div className="data-collection">
        <Card.Header>
          <h3>{questionCategories[questionCategoryId].category}</h3>
          <p>{questionCategories[questionCategoryId].prompt}</p>
        </Card.Header>
        <Card.Body className="collection-category-height">
          <div className="collection-sidebar left">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" className="collection-sidebar-navButton" onClick={() => previousCategory()} />
          </div>
          <div className="collection-sidebar right">
            <FontAwesomeIcon icon={faChevronCircleRight} size="3x" className="collection-sidebar-navButton" onClick={() => completeCategory()} />
          </div>
          <Carousel className={"collection-carousel-fade"} indicators={false} slide={false} controls={false} activeIndex={questionCategoryId}>
            {questionCategories.map((category, catIndex) => {
              return (
                <Carousel.Item key={catIndex}>
                  <QuestionCategory
                    active={catIndex === questionCategoryId}
                    type={category.type}
                    questions={category.questions}
                    setAnswers={(answers) => saveQuestionCategory(catIndex, answers)} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Card.Body>
        <div> </div>
      </div >
    )
  }
  else {
    console.error("Completed question categories. Id " + questionCategoryId + " is out of range.");
  }
}
