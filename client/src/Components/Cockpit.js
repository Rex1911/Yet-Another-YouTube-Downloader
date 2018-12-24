import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default props => (
  <div id="cockpit-container">
    <TextField
      id="url-input"
      value={props.val}
      label="URL"
      margin="normal"
      variant="outlined"
      fullWidth={true}
      onChange={props.change}
    />
    <Button
      onClick={props.click}
      id="search-button"
      variant="contained"
      color="secondary"
    >
      Search
    </Button>
  </div>
);
