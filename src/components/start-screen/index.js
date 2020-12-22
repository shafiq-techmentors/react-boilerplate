import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Modal from "components/shared/modal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "components/shared/copyright";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Style";
import Logo from "assets/images/logo.png";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";

const StartScreen = (props) => {
  const classes = useStyles();
  const [formValue, setFormValue] = useState({
    formName: "",
    apiEndPoint: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("__", JSON.stringify(formValue));
    props.history.push("/admin-dashboard");
  };
  const handleCancel = () => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src={Logo} alt="logo" style={{ width: "150px" }} />
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Documentations
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          className={classes.topHeading}
          gutterBottom
        >
          Let's get started!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          The first step is to create a form. Once you create a form then you
          can export and save in local directory. When you need the same
          designed form anywhere in the project, you can simply import the form
        </Typography>
      </Container>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          {/* <Button align="center" variant="contained" color="primary">
            Create a Project
          </Button> */}
          <Modal
            title="Create a Form"
            btnText="Create a Form"
            btnColor="primary"
            btnVariant="contained"
            btnAlign="center"
            footeBtn1="Create"
            footerBtn2="Cancel"
            bodyText="Provide meaninggul name to the form and save"
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          >
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Form Name"
                name="formName"
                value={formValue.formName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                id="standard-basic"
                placeholder="http://baseurl.com/apis/controller/testAPI                "
                label="API End Point"
                name="apiEndPoint"
                value={formValue.apiEndPoint}
                onChange={handleChange}
                fullWidth
              />
            </form>
          </Modal>
        </Grid>
      </Grid>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default withRouter(StartScreen);
