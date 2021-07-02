import React from "react";
import { Button } from "react-bootstrap";

export default function MultiselectQuestion(props) {
  const { question, value: selectedValues, updateFunc } = props;
  const toggle = (selectedIndex, optionText) => {
    let response = [...selectedValues];

    if (selectedIndex >= 0) {
      delete response[selectedIndex];
    } else {
      response.push(optionText);
    }
    updateFunc(response);
  }

  return (
    <div>
      <p>{question.text}</p>
      {question.options.map((optionText, optionKey) => {
        let selectedIndex = selectedValues.indexOf(optionText);
        return (
          <Option
            key={optionKey}
            text={optionText}
            toggle={() => toggle(selectedIndex, optionText)}
            selected={selectedIndex >= 0} />
        );
      }
      )}
    </div>
  )
}

const Option = (props) => {
  return (
    <Button variant={props.selected ? "primary" : "secondary"} onClick={props.toggle}>{props.text}</Button>
  )
}