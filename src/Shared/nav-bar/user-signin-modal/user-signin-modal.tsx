import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Grid } from "@material-ui/core";

export enum TypeEnumModal {
  UserSignIn = "UserSignIn",
}

interface InitialState {
  modalToggle: boolean;
  email: string;
  password: string;
  showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 4),
    },
    margin: {
      margin: theme.spacing(3),
      width: "100%",
    },
  })
);

const UserSigninModal: React.FC = () => {
  const classes = useStyles();
  let template;

  const initialState: InitialState = {
    modalToggle: false,
    email: "",
    password: "",
    showPassword: false,
  };

  const [state, setState]: any = useState(initialState);

  const set = (value: any): void => {
    setState((initialState: InitialState) => ({ ...initialState, ...value }));
  };

  return (
    <>
      <FontAwesomeIcon
        onClick={() => set({ modalToggle: !state.modalToggle })}
        className="icon"
        icon={faUser}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={state.modalToggle}
        onClose={() => set({ modalToggle: !state.modalToggle })}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.modalToggle}>
          <div className={classes.paper}>
            <Grid direction="column">
              <Grid item sm={10}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-Email">
                    Email
                  </InputLabel>
                  <Input
                    id="standard-adornment-Email"
                    value={state.email}
                    aria-describedby="standard-Email-helper-text"
                    inputProps={{
                      "aria-label": "Email",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={10}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={state.showPassword ? "text" : "password"}
                    value={state.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            set({ showPassword: !state.showPassword });
                          }}
                          onMouseDown={() => {
                            set({ showPassword: !state.showPassword });
                          }}
                        >
                          {state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default UserSigninModal;
