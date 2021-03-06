import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function OrderDisplay(props) {
  const { order } = props;
  return (
    <Fragment>
      <TableRow>
        <TableCell rowSpan={2}>
          <strong>Order:</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Name</strong>
        </TableCell>
        <TableCell colSpan={2} align="center">
          <strong>Order Id</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Order Summary</strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{order.name}</TableCell>
        <TableCell colSpan={2}>{order.id}</TableCell>
        <TableCell>{order.summary}</TableCell>
      </TableRow>
    </Fragment>
  );
}

export default OrderDisplay;
