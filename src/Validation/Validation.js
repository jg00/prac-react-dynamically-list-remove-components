import React from "react";

const validation = props => {
  const minLength = 5;
  let validateMessage = null;

  if (!props.textLength) validateMessage = null;
  else if (props.textLength < minLength) validateMessage = "Text too short";
  else validateMessage = "Text long enough";

  return <p>{validateMessage}</p>;
};

export default validation;
