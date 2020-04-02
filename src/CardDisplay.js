import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TableDisplay from "./TableDisplay";
import { styled } from "@material-ui/core/styles";
import EditDialog from "./EditDialog";

const MyCard = styled(Card)({
  display: "inline-block",
  margin: 10,
  padding: 10,
  border: "5px solid",
  variant: "outlined"
});

function CardDisplay(props) {
  const { data, cardKey, updateData } = props;
  const [open, setOpen] = useState(false);

  const handleClose = (data, cardKey, event) => {
    event.stopPropagation();
    setOpen(false);

    if (event.target.innerText === "UPDATE") {
      updateData(data, cardKey);
    }
  };

  const handleNewItem = dialogData => {
    updateData(dialogData, cardKey);
  };

  const clickLocal = () => {
    setOpen(true);
  };

  return (
    <MyCard
      onClick={() => {
        clickLocal(data);
      }}
    >
      <TableDisplay data={data} />
      <EditDialog
        data={data}
        open={open}
        handleNewItem={handleNewItem}
        handleClose={handleClose}
        key={cardKey}
        cardKey={cardKey}
      />
    </MyCard>
  );
}

export default CardDisplay;
