import React from "react";
import { Card } from "react-bootstrap";

export default function CardSelectionQuestion(props) {
  const { question, updateFunc } = props;
  let selectedOption = question.value;
  const changeSelection = (key) => {
    let selection = question.options.filter(option => option.key === key);
    let prevKey = selectedOption && selectedOption[0] && selectedOption[0].key;
    let currentKey = selection && selection[0] && selection[0].key;
    if (prevKey === currentKey) {
      updateFunc([]);
    } else {
      updateFunc(selection);
    }
  }
  const SELECTED_CLASS = "bg-light border-primary card-selection-option";
  const DESELECTED_CLASS = "bg-light card-selection-option";
  const selectedValue = (selectedOption && selectedOption[0] && selectedOption[0].val);
  return (
    <div className="card-selection-option-wrapper">
      {question.options.map((option, index) => {
        let cardClass = (option.val === selectedValue) ? SELECTED_CLASS : DESELECTED_CLASS;
        cardClass += ((option.val === selectedValue) ? " selected text-primary" : "");
        let wrapperClass = "card-selection-column top-" + index;
        return (
          <div className={wrapperClass} key={option.key}>
            <Card className={cardClass} onClick={() => changeSelection(option.key)}>
              <Card.Header>{option.val}</Card.Header>
              <Card.Body>{option.description}</Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}