import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function CostDisplay(props) {
  const { cost } = props;

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
        <TableCell align="center">£{(+cost.subtotal).toFixed(2)}</TableCell>
        <TableCell align="center">£{(+cost.tax).toFixed(2)}</TableCell>
        <TableCell align="center">£{(+cost.shipping).toFixed(2)}</TableCell>
        <TableCell align="center">
          £{(+cost.subtotal + +cost.tax + +cost.shipping).toFixed(2)}
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default CostDisplay;
