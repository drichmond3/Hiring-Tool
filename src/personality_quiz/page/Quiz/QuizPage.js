import React, { useState, useEffect } from "react";
import "./QuizPage.css";
import QuestionCategory from "./QuestionCategory";

export default function QuizPage(props) {
  let [questionCategories, setQuestionCategories] = useState(props.questionCategories);
  let [questionCategoryId, setQuestionCategoryId] = useState(0);
  useEffect(() => setQuestionCategories(props.questionCategories), [props.questionCategories]);

  let previousCategory = (categoryIndex, updatedQuestions) => {
    saveQuestionCategory(categoryIndex, updatedQuestions);
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

  let completeCategory = (categoryIndex, updatedQuestions) => {
    let response = saveQuestionCategory(categoryIndex, updatedQuestions);
    if (questionCategoryId >= questionCategories.length - 1) {
      props.nextPage(response);
    } else {
      setQuestionCategoryId(questionCategoryId + 1);
    }
  }

  if (questionCategoryId <= questionCategories.length) {
    return (
      <div className="data-collection">
        <QuestionCategory
          category={questionCategories[questionCategoryId].category}
          prompt={questionCategories[questionCategoryId].prompt}
          type={questionCategories[questionCategoryId].type}
          questions={questionCategories[questionCategoryId].questions}
          submit={(answers) => completeCategory(questionCategoryId, answers)}
          back={(answers) => previousCategory(questionCategoryId, answers)} />
        <div> </div>
      </div>
    )
  }
  else {
    console.error("Completed question categories. Id " + questionCategoryId + " is out of range.");
  }
}
