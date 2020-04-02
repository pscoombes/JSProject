import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import formattedDate from "./FormattedDate";

function CreationDateDisplay(props) {
  const { creationDate } = props;
  const formattedCreationDate = formattedDate(creationDate);
  return (
    <TableRow>
      <TableCell>
        <strong>Creation Date:</strong>
      </TableCell>
      <TableCell colSpan={4}>{formattedCreationDate}</TableCell>
    </TableRow>
  );
}

export default CreationDateDisplay;
