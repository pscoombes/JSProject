import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import formattedDate from "./FormattedDate";

function LastModifiedDateDisplay(props) {
  const { modifiedDate } = props;

  const date = formattedDate(modifiedDate);
  return (
    <TableRow>
      <TableCell>
        <strong>Last Modified Date:</strong>
      </TableCell>
      <TableCell colSpan={4}>{date}</TableCell>
    </TableRow>
  );
}

export default LastModifiedDateDisplay;
