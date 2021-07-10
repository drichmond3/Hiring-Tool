import React from "react";
import { Card } from "react-bootstrap";

export default function SingleSelectQuestion(props) {
  const { question, value: selectedOption, updateFunc } = props;

  const changeSelection = (key) => {
    let selection = question.options.filter(option => option.key === key);
    updateFunc(selection);
  }
  const SELECTED_CLASS = "bg-primary option-card";
  const DESELECTED_CLASS = "bg-light option-card";
  const selectedValue = (selectedOption && selectedOption[0] && selectedOption[0].val);
  return (
    question.options.map((option) =>
      <Card className={(option.val === selectedValue) ? SELECTED_CLASS : DESELECTED_CLASS} key={option.key} onClick={() => changeSelection(option.key)}>
        <Card.Body>{option.val}</Card.Body>
      </Card>
    )
  )
}