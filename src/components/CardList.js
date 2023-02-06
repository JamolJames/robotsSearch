import React from "react";
import Card from "./Card";

const CardList = ({ robotsData }) => {
  return (
    <div>
      {robotsData.map(({ id, name, email }, index) => {
        return <Card key={index} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
