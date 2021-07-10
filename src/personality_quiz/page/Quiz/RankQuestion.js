import React from "react";
import { Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default function RankQuestion(props) {
  const { uniqueId, updateFunc } = props;
  let orderedValues = (props.question.value && props.question.value.length) ? [...props.question.value] : [...props.question.options];
  const updateOrder = (dragData) => {
    const dest = dragData.destination.index;
    const start = dragData.source.index;
    let response = [...orderedValues];
    const changedEntry = response.splice(start, 1);
    response.splice(dest, 0, changedEntry[0]);
    updateFunc(response);
  }

  return (
    <div className="question">
      <DragDropContext onDragEnd={updateOrder}>
        <Droppable droppableId={"rankQuestion_" + uniqueId}>
          {(provided) => (
            <ol className="rank_list" {...provided.droppableProps} ref={provided.innerRef}>
              {orderedValues.map((optionObj, optionIndex) =>
              (
                <Draggable key={optionObj.key + ""} draggableId={optionObj.key + ""} index={optionIndex}>
                  {(provided) => (
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      <Card className="rank_content">
                        <div>
                          <Card.Header>
                            <div className={"rank_icon"}>
                              <FontAwesomeIcon icon={faEllipsisV} />
                              <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                            {optionObj.val}
                          </Card.Header>
                          <Card.Body>{optionObj.description}</Card.Body>
                        </div>
                      </Card>
                    </li>
                  )}
                </Draggable>
              )
              )}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}