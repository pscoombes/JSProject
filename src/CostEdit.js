import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

function OrderEdit(props) {
  const { cost } = props;

  return (
    <Fragment>
      <DialogContentText>
        <strong>Cost</strong>
      </DialogContentText>
      <TextField
        id="subtotal"
        label="Subtotal"
        type="text"
        defaultValue={(+cost.subtotal).toFixed(2)}
      />
      <TextField
        id="tax"
        label="Tax"
        type="text"
        defaultValue={(+cost.tax).toFixed(2)}
      />
      <TextField
        id="shipping"
        label="Shipping"
        type="text"
        defaultValue={(+cost.shipping).toFixed(2)}
      />
    </Fragment>
  );
}

export default OrderEdit;
