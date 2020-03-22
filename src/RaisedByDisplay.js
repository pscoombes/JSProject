import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function RaisedByDisplay(props) {
  const { data } = props;
  const { raisedBy } = data;

  return (
    <TableRow>
      <TableCell>
        <strong>Raised by:</strong>
      </TableCell>
      <TableCell colSpan={4}>{raisedBy}</TableCell>
    </TableRow>
  );
}

export default RaisedByDisplay;
