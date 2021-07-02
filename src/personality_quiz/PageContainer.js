import React from "react";
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
      child = renderQuizPage(props);
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
    <div className="page-container">
      {child}
    </div>
  );
}

const renderWelcomePage = (props) => {
  console.log("Rendering welcome page");
  const nextPage = () => props.setActivePage(Page.QUIZ);
  return <WelcomePage nextPage={nextPage} />
}

const renderQuizPage = (props) => {
  const previousPage = () => props.setActivePage(Page.WELCOME);
  const nextPage = () => props.setActivePage(Page.RESULTS);
  return <QuizPage previousPage={previousPage} nextPage={nextPage} questions={props.questions} />
}

const renderResultsPage = (props) => {
  const nextPage = () => props.setActivePage(Page.QUIZ);
  return <ResultsPage nextPage={nextPage} />
}