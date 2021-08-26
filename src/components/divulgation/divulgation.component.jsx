import React from "react";
import "./divulgation.styles.css";

const Component = ({
  title = "",
  description = "",
  buttonText = "",
  link = "",
}) => {
  return (
    <div className="divulgation-styles">
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonText != "" ? <a href={link}>{buttonText}</a> : null}
    </div>
  );
};

export default Component;
