import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";

function RaisedByEdit(props) {
  const { raisedBy } = props;

  return (
    <Fragment>
      <TextField
        id="raisedby"
        label="Raised By"
        type="text"
        fullWidth
        defaultValue={raisedBy}
      />
    </Fragment>
  );
}

export default RaisedByEdit;
