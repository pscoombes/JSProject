import React from "react";
import Card from "@material-ui/core/Card";
import TableDisplay from "./tableDisplay";
import { styled } from "@material-ui/core/styles";

import recordClick from "./handleClick";

const MyCard = styled(Card)({
  display: "inline-block",
  margin: 10,
  padding: 10,
  border: "5px solid",
  variant: "outlined"
});

function cardDisplay(props) {
  console.log("cardDisplay 1", props.data);
  return (
    <MyCard onClick={recordClick}>
      <TableDisplay data={props.data} />
    </MyCard>
  );
}

export default cardDisplay;
