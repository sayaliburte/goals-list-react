import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  function deleteHandler() {
        props.onDelete(props.id);
    }

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
