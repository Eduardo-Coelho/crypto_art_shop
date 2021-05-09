import React from "react";
import "./gallery-sort.scss";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GallerySort: React.FC = () => {
  const [state, setState] = React.useState({
    Bitcoin: true,
    BitcoinCash: false,
    DASH: false,
    Dogecoin: false,
    Litecoin: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Bitcoin, BitcoinCash, DASH, Dogecoin, Litecoin } = state;

  const error =
    [Bitcoin, BitcoinCash, DASH, Dogecoin, Litecoin].filter((v) => v).length !==
    2;

  return (
    <div className="sort-container">
      <p>Available: 0</p>
      <h2>Sort by Cryto Type </h2>
      <FormControl component="fieldset" className="formControl">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Bitcoin}
                onChange={handleChange}
                name="Bitcoin"
              />
            }
            label="Bitcoin"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={BitcoinCash}
                onChange={handleChange}
                name="BitcoinCash"
              />
            }
            label="Bitcoin Cash"
          />
          <FormControlLabel
            control={
              <Checkbox checked={DASH} onChange={handleChange} name="DASH" />
            }
            label="DASH"
          />
        </FormGroup>
      </FormControl>

      <FormControl
        required
        error={error}
        component="fieldset"
        className="formControl"
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Dogecoin}
                onChange={handleChange}
                name="Dogecoin"
              />
            }
            label="Dogecoin"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Litecoin}
                onChange={handleChange}
                name="Litecoin"
              />
            }
            label="Litecoin"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default GallerySort;
