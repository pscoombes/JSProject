import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

function OrderEdit(props) {
  const { order } = props;
  return (
    <Fragment>
      <DialogContentText>
        <strong>Order</strong>
      </DialogContentText>
      <TextField
        autoFocus
        id="name"
        label="Name"
        type="text"
        defaultValue={order.name}
      />
      <TextField
        id="orderid"
        label="Order Id"
        type="text"
        defaultValue={order.id}
      />
      {/* <br /> */}
      <TextField
        id="summary"
        label="Order Summary"
        type="text"
        defaultValue={order.summary}
      />
    </Fragment>
  );
}

export default OrderEdit;
