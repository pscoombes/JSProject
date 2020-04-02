import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import formattedDate from "./FormattedDate";

function CreationDateEdit(props) {
  const { creationDate } = props;
  const date = formattedDate(creationDate);

  return (
    <Fragment>
      <TextField
        id="creationdate"
        label="Creation Date"
        type="text"
        fullWidth
        defaultValue={date}
      />
    </Fragment>
  );
}

export default CreationDateEdit;
