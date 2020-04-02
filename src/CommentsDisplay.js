import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function CommentsDisplay(props) {
  const { comments } = props;

  return (
    <TableRow>
      <TableCell>
        <strong>Comments:</strong>
      </TableCell>
      <TableCell colSpan={4}>{comments}</TableCell>
    </TableRow>
  );
}

export default CommentsDisplay;
