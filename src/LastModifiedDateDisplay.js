import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import FormattedDate from "./FormattedDate";

function LastModifiedDateDisplay(props) {
  const { data } = props;
  const { modifiedDate } = data;

  return (
    <TableRow>
      <TableCell>
        <strong>Last Modified Date:</strong>
      </TableCell>
      <TableCell colSpan={4}>
        <FormattedDate value={modifiedDate} />
      </TableCell>
    </TableRow>
  );
}

export default LastModifiedDateDisplay;
