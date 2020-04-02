import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function ItemDisplay(props) {
  const { items } = props;

  return (
    <Fragment>
      <TableRow key={items.length}>
        <TableCell rowSpan={items.length + 1}>
          <strong>Items:</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Quantity</strong>
        </TableCell>
        <TableCell align="center" colSpan={2}>
          <strong>Product Id</strong>
        </TableCell>
        <TableCell align="center">
          <strong>Product Description</strong>
        </TableCell>
      </TableRow>
      {items.map((value, index) => {
        return (
          <TableRow key={index.toString()}>
            <TableCell align="center">{value.quantity}</TableCell>
            <TableCell align="center" colSpan={2}>
              {value.productId}
            </TableCell>
            <TableCell>{value.productDescription}</TableCell>
          </TableRow>
        );
      })}
    </Fragment>
  );
}

export default ItemDisplay;
