import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function ShippingAddressDisplay(props) {
  const { data } = props;
  const { shippingAddress } = data;

  return (
    <TableRow>
      <TableCell>
        <strong>Shipping Address:</strong>
      </TableCell>
      <TableCell colSpan={4}>{shippingAddress}</TableCell>
    </TableRow>
  );
}

export default ShippingAddressDisplay;
