import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import FormattedDate from "./FormattedDate";

function CreationDateDisplay(props) {
  const { data } = props;
  const { creationDate } = data;

  return (
    <TableRow>
      <TableCell>
        <strong>Creation Date:</strong>
      </TableCell>
      <TableCell colSpan={4}>
        <FormattedDate value={creationDate} />
      </TableCell>
    </TableRow>
  );
}

export default CreationDateDisplay;
