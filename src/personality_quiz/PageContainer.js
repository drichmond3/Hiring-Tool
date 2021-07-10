import React from "react";
import { Card } from "react-bootstrap";
import { Page } from "./NavigationBar";
import WelcomePage from "./page/WelcomePage";
import QuizPage from "./page/Quiz/QuizPage";
import ResultsPage from "./page/ResultsPage";
import "./ContentContainer.css";

export default function PageContainer(props) {
  let child = null;

  switch (props.activePage) {
    case Page.WELCOME:
      child = renderWelcomePage(props);
      break;
    case Page.QUIZ:
      child = renderQuizPage(props.test, props.setActivePage, props.setResults);
      break;
    case Page.RESULTS:
      child = renderResultsPage(props);
      break;
    default:
      console.warn("Tried to switch to unknown page: ", props.activePage);
      console.warn("Displaying default page WELCOME");
      child = renderWelcomePage(props);
  }
  return (
    <Card className="page-container">
      {child}
    </Card>
  );
}

const renderWelcomePage = (props) => {
  const nextPage = () => props.setActivePage(Page.QUIZ);
  return <WelcomePage nextPage={nextPage} />
}

const renderQuizPage = (questionCategories, setActivePage, setResults) => {
  let nextPage = (questionsAndAnswers) => {
    console.log("results are ", questionsAndAnswers);
    setResults(questionsAndAnswers);
    setActivePage(Page.RESULTS);
  }
  let previousPage = () => setActivePage(Page.WELCOME);

  return <QuizPage
    previousPage={previousPage}
    nextPage={nextPage}
    questionCategories={questionCategories}
  />
}

const renderResultsPage = (props) => {
  let answers = props.test;
  console.log("Answers are ", answers);
  const nextPage = () => props.setActivePage(Page.QUIZ);
  return <ResultsPage nextPage={nextPage} />
}