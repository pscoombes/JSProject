import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";

function ShippingAddressEdit(props) {
  const { shippingAddress } = props;

  return (
    <Fragment>
      <TextField
        id="shippingaddress"
        label="Shipping Address"
        type="text"
        fullWidth
        defaultValue={shippingAddress}
      />
    </Fragment>
  );
}

export default ShippingAddressEdit;
