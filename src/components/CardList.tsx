import * as React from "react";
import Card from "./Card";
import { IRobot } from "../containers/App";

interface CardListProps {
  robots: Array<IRobot>;
}

const CardList = (props: CardListProps) => {
  return (
    <div>
      {props.robots.map((user: IRobot, i: number) => {
        return (
          <Card
            key={i}
            id={props.robots[i].id}
            name={props.robots[i].name}
            email={props.robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
