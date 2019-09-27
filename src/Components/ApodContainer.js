import React from "react";

const ApodContainer = props => {
  console.log(props.img.title);

  return (
    <div className="picture-card">
      <h2>Title: {props.img.title}</h2>
      <h3>{props.img.date}</h3>
      <img src={props.img.url} alt="NASA Photo of Day" />
      <p>{props.img.explanation}</p>
    </div>
  );
};

export default ApodContainer;
