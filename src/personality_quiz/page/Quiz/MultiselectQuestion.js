import React from "react";
import { Button } from "react-bootstrap";

export default function MultiselectQuestion(props) {
  const { question, updateFunc } = props;
  const selectedValues = question.value || [];
  const toggle = (selectedIndex, option) => {
    let response = [...selectedValues];

    if (selectedIndex >= 0) {
      response.splice(selectedIndex, 1);
    } else {
      response.push(option);
    }
    updateFunc(response);
  }
  let selectedKeys = selectedValues.map(obj => obj.key);
  return (
    <div className="multiselect-question">
      <p>{question.text}</p>
      {question.options.map((optionObj) => {
        let selectedIndex = selectedKeys.indexOf(optionObj.key);
        return (
          <Option
            key={optionObj.key}
            text={optionObj.val}
            toggle={() => toggle(selectedIndex, optionObj)}
            selected={selectedIndex >= 0} />
        );
      }
      )}
    </div>
  )
}

const Option = (props) => {
  return (
    <Button variant={props.selected ? "secondary" : "light"} onClick={props.toggle}>{props.text}</Button>
  )
}