import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default () => (
  <div id="result-container">
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="data:image/png;base64,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"
          title="Contemplative Reptile"
          class
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Video Information
          </Typography>
          <Typography component="p">Title: Dummy Title</Typography>
          <Typography component="p">Author: Dummy Author</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions id="card-action">
        <Button size="small" color="secondary">
          Download
        </Button>
      </CardActions>
    </Card>
  </div>
);
