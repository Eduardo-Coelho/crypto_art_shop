import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "10px",
    },
    media: {
      height: 100,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: "rgb(216, 91, 42)",
    },
  })
);

const GalleryCard: React.FC<any> = ({ item }) => {
  const classes = useStyles();
  console.log("item -> ", typeof item.cdn);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.name.substring(0, 2)}
          </Avatar>
        }
        title={item.name.substring(0, 19)}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={item.cdn}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
