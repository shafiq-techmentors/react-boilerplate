import React from "react";
import Layout from "components/shared/layout";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import GetAppIcon from "@material-ui/icons/GetApp";
import SaveIcon from "@material-ui/icons/Save";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./Styles";
export default () => {
  const classes = useStyles();
  const [preview, setPreview] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setPreview({ ...preview, [event.target.name]: event.target.checked });
  };
  console.log("preview state....", preview.checkedA);
  return (
    <Layout>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.MainGrid1}
      >
        <Grid item xs={12} sm={12} md={3}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<CloudUploadIcon />}
            className={classes.topGridButton}
          >
            Export ALl Forms
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GetAppIcon />}
            className={classes.topGridButton}
          >
            Import ALl Forms
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<SaveIcon />}
            className={classes.topGridButton}
          >
            Publish Form
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <FormControlLabel
            control={
              <Switch
                checked={preview.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="secondary"
              />
            }
            label="Preview"
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.MainGrid2}
      >
        <Grid item xs={12} className={classes.DNDGrid}>
          <h2 className={classes.DNDGridH2}>Drag and Drop fields here</h2>
        </Grid>
      </Grid>
    </Layout>
  );
};
