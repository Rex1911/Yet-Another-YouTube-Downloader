import React from "react";
import Typography from "@material-ui/core/Typography";

export default () => {
  return (
    <div>
      <Typography
        align="center"
        component="h2"
        variant="h1"
        color="secondary"
        style={{ marginBottom: 0 }}
        gutterBottom
      >
        YAYTD
      </Typography>
      <Typography
        variant="overline"
        color="secondary"
        align="center"
        gutterBottom
      >
        YET ANOTHER YOUTUBE DOWNLOADER
      </Typography>
    </div>
  );
};
