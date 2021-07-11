import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat, faGlasses, faBook, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function SingleSelectQuestion(props) {
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
  const SELECTED_CLASS = "border-primary ";
  const DESELECTED_CLASS = "";
  const selectedValue = (selectedOption && selectedOption[0] && selectedOption[0].val);
  return (
    <div className="single-select-options-container">
      {question.options.map((option) => {
        let cardClass = (option.val === selectedValue) ? SELECTED_CLASS : DESELECTED_CLASS;
        cardClass += ((option.val === selectedValue) ? " selected text-primary" : "");
        let icon = getIcon(option.icon);
        return (
          <div className="single-select-option-column" key={option.key}>
            <Card className={cardClass} onClick={() => changeSelection(option.key)}>
              <Card.Header><Card.Title>{option.val}</Card.Title></Card.Header>
              <ListGroup variant="flush" className="">
                <ListGroup.Item><FontAwesomeIcon icon={icon} size="5x" /></ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <div className="single-selection-option-body">
                  <div>{option.description}</div>
                  <div style={{ backgroundImage: `url(\"${option.background}\")` }}>.</div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">{option.tagline}</Card.Footer>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
const getIcon = (name) => {
  switch (name) {
    case "fa-glasses":
      return faGlasses;
    case "fa-hard-hat":
      return faHardHat;
    case "fa-book":
      return faBook;
    default:
      return faCircle;
  }
}