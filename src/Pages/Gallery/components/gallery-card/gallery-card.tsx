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
import { Contents } from "../../../../State/gallery/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "10px",
    },
    media: {
      height: 250,

      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: "rgb(216, 91, 42)",
    },
  })
);

interface Props {
  item: Contents;
}

const GalleryCard: React.FC<Props> = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.crypto.substring(0, 2)}
            </Avatar>
          }
          title={item.name.substring(0, 19)}
          subheader={item.date}
        />
        <CardMedia
          className={classes.media}
          image={item.cdn}
          title={item.name}
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
    </>
  );
};

export default GalleryCard;
