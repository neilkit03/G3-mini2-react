import React from "react";

const ServicesItems = (props) => {
  return (
    <div>
      <div className='col-md-4'>
        <div className='service-media'>
          {" "}
          <img src='img/services/service-1.jpg' alt=' ' />{" "}
        </div>
        <div className='service-desc'>
          <h3>{props.Title}</h3>
          <p>{props.Content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesItems;
