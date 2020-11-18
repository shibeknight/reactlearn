import React from "react";
import Card from '../components/Card'

function Home(props) {
  return (
    <div>
      <h1>We are in the home component an it has a prop of {props.city}</h1>
      <div className="row">
        <div className="col">
          <Card
            name="Daniel"
            dogname="Sora"
            titlecolor="red"
            cardimg="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg"
          />
        </div>
        <div className="col">
          <Card
            name="Ryan"
            titlecolor="green"
            cardimg="https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"
          />
        </div>
        <div className="col">
          <Card
            name="Nathan"
            titlecolor="yellow"
            cardimg="https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
