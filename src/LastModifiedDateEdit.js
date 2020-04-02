import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import formattedDate from "./FormattedDate";

function LastModifiedDateEdit(props) {
  const { modifiedDate } = props;

  const date = formattedDate(modifiedDate);
  return (
    <Fragment>
      <TextField
        id="modifieddate"
        label="Last Modified Date"
        type="text"
        fullWidth
        defaultValue={date}
      />
    </Fragment>
  );
}

export default LastModifiedDateEdit;
