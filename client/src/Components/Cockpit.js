import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

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
    {props.error ? <Typography color="secondary">
      Something went wrong, please try again
    </Typography> : null}
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