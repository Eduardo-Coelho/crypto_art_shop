import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { AppBar, InputBase, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "20px",
      position: "relative",

      backgroundColor: fade("rgb(216, 91, 42)", 5.0),
      "&:hover": {
        backgroundColor: fade("rgb(216, 91, 42)", 0.55),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      fontSize: "20px",
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),

      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "10vh",
        "&:focus": {
          width: "70vh",
        },
      },
    },
  })
);

const GallerySearch: React.FC = () => {
  const classes = useStyles();

  return (
    <Toolbar>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Toolbar>
  );
};

export default GallerySearch;
