import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function CommentsDisplay(props) {
  const { data } = props;
  const { comments } = data;
  console.log("CommentsDisplay 1", data);
  console.log("CommentsDisplay 2", comments);

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
