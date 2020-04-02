import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

function ItemEdit(props) {
  const { items } = props;

  return (
    <Fragment>
      <DialogContentText key={items[0].length}>
        <strong>Items</strong>
      </DialogContentText>
      {items.map((value, index) => {
        return (
          <DialogContent key={index}>
            <TextField
              id="quantity"
              label="Quantity"
              type="text"
              defaultValue={value.quantity}
            />
            <TextField
              id="productid"
              label="Product Id"
              type="text"
              defaultValue={value.productId}
            />
            <TextField
              id="productdescription"
              label="Product Description"
              type="text"
              defaultValue={value.productDescription}
            />
          </DialogContent>
        );
      })}
    </Fragment>
  );
}

export default ItemEdit;
