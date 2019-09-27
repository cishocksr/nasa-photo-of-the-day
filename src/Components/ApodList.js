import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodContainer from "./ApodContainer";

function ApodList() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=mJBtJDIrS0K8wuP4urRw8CTUYOcSGi0f6tS3no2p"
      )
      .then(response => {
        const img = response.data;
        console.log("APOD", img);
        setImg(img);
      })
      .catch(error => {
        console.log("Wrong, data was not returned", error);
      });
  }, []);

  return (
    <div className="pictureOfDay">
      {axios.response.map(pic => {
        return (
          <ApodContainer
            key={pic.copyright}
            title={pic.title}
            date={pic.date}
            image={pic.url}
            description={pic.explanation}
          />
        );
      })}
    </div>
  );
}

export default ApodList;
