import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function ItemDisplay(props) {
  const { data } = props;
  const { items } = data;

  let content = [];
  let numberOfRows = items[0].length + 1;
  content.push(
    <TableRow>
      <TableCell rowSpan={numberOfRows}>
        <strong>Items:</strong>
      </TableCell>
      <TableCell align="center">
        <strong>Quantity</strong>
      </TableCell>
      <TableCell align="center" colSpan={2}>
        <strong>Product id</strong>
      </TableCell>
      <TableCell align="center">
        <strong>Product Description</strong>
      </TableCell>
    </TableRow>
  );
  for (let i = 0; i < items[0].length; i++) {
    content.push(
      <TableRow>
        <TableCell align="center">{items[0][i].quantity}</TableCell>
        <TableCell align="center" colSpan={2}>
          {items[0][i].productId}
        </TableCell>
        <TableCell>{items[0][i].productDescription}</TableCell>
      </TableRow>
    );
  }
  //   console.log("ItemDisplay 2", content);
  return <Fragment>{content}</Fragment>;
}

export default ItemDisplay;
