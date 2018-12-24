import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Select, MenuItem } from "@material-ui/core";

export default props => (
  <div id="result-container">
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.img}
          title={props.title}
          style={{width:"50%",margin:"auto"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Video Information
          </Typography>
          <Typography component="p"><strong>Title:</strong> {props.title}</Typography>
          <Typography component="p"><strong>Author:</strong> {props.author}</Typography>
          <Typography component="p" style={{display:"inline",marginRight:10}}><strong>Quality:</strong></Typography>
          <Select value={props.selectedQuality} onChange={props.change}>
            {props.availableQuality.map(quality => <MenuItem key={quality.itag} value={quality.url}>{quality.resolution}/{quality.container}</MenuItem>)}
          </Select>
        </CardContent>
      </CardActionArea>
      <CardActions id="card-action">
        <Button size="small" color="secondary" onClick={props.click}>
          Download
        </Button>
      </CardActions>
    </Card>
  </div>
);
