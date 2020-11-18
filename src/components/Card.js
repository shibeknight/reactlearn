import React from "react";

function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{color: props.titlecolor}}>{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go find {props.dogname}
        </a>
      </div>
    </div>
  );
}

export default Card;
