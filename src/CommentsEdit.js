import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";

function CommentsEdit(props) {
  const { comments } = props;

  return (
    <Fragment>
      <TextField
        id="comments"
        label="Comments"
        type="text"
        fullWidth
        defaultValue={comments}
      />
    </Fragment>
  );
}

export default CommentsEdit;
