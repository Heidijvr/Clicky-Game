import React from "react";
import "./Card.css";
// import ImageUploadResizer from 'react-form-upload-image-resize';

//pass the image into each card so all 12 are rendered
const Card = props => (
    <div className="card" onClick={props.imageClick}>
      <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        {/* <ImageUploadResizer change={image} width={200} height={200} /> */}
      </div>
    </div>
  );

export default Card;