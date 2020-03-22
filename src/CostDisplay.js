import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function CostDisplay(props) {
  const { data } = props;
  const { cost } = data;
  return (
    <Fragment>
      <TableRow>
        <TableCell rowSpan={2}>
          <strong>Cost:</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Subtotal</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Tax</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Shipping</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Total</strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">£{cost.subTotal}</TableCell>
        <TableCell align="center">£{cost.tax}</TableCell>
        <TableCell align="center">£{cost.shipping}</TableCell>
        <TableCell align="center">£{cost.total}</TableCell>
      </TableRow>
    </Fragment>
  );
}

export default CostDisplay;
