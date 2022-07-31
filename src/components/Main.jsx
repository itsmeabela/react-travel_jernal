import React from "react";

const Main = (props) => {
  const {
    dataStatus: {
      imageUrl,
      location,
      googleMapsUrl,
      title,
      startDate,
      endDate,
      description,
    },
  } = props;
  return (
    <main className="main-container">
      <img src={imageUrl} className="main-img" alt="" />
      <div>
        <img
          src="./images/Fill 219.png"
          alt="Mount Fuji img"
          className="location-icon"
        />
        <span>{location}</span>
        <a href={googleMapsUrl}>View on Google Maps</a>
        <h1 className="main-title">{title}</h1>
        <p className="main-date">
          {startDate} - {endDate}
        </p>
        <p className="main-text">{description}</p>
      </div>
    </main>
  );
};
export default Main;
