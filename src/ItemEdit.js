import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ItemEdit(props) {
  const { items, addItem } = props;

  return (
    <Fragment>
      <DialogContentText key={items.length}>
        <strong>Items</strong>
        <Button
          variant="outlined"
          onClick={() => {
            addItem(items.length);
          }}
        >
          Add new item
        </Button>
      </DialogContentText>

      {items.map((value, index) => {
        return (
          <DialogContent key={index}>
            <TextField
              id={"quantity" + index}
              label="Quantity"
              type="text"
              defaultValue={value.quantity}
            />
            <TextField
              id={"productid" + index}
              label="Product Id"
              type="text"
              defaultValue={value.productId}
            />
            <TextField
              id={"productdescription" + index}
              label="Product Description"
              type="text"
              defaultValue={value.productDescription}
            />
            <FormControlLabel
              control={<Checkbox id={"delete" + index} />}
              label="Delete"
            />
          </DialogContent>
        );
      })}
    </Fragment>
  );
}

export default ItemEdit;
