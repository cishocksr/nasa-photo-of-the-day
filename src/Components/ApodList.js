import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodContainer from "./ApodContainer";

function ApodList() {
  const [img, setImg] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=mJBtJDIrS0K8wuP4urRw8CTUYOcSGi0f6tS3no2p"
      )
      .then(response => {
        setImg(response.data);
      })
      .catch(error => {
        console.log("Wrong, data was not returned", error);
      });
  }, []);
  console.log(img);
  if (!img) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="pictureOfDay">
      <ApodContainer img={img} />
    </div>
  );
}

export default ApodList;
