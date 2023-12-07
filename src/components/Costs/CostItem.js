import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useState } from "react";

function CostItem(props) {
  let description = props.description;


  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
