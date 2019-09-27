import React from "react";

const ApodContainer = props => {
  console.log(props);
  return (
    <div className="picture-card" key={props.copyright}>
      <h2>Title: {props.title}</h2>
      <img>{props.url}</img>
      <p>{props.explanation}</p>
    </div>
  );
};

export default ApodContainer;
