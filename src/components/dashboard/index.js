import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Layout from "components/shared/layout";
import DashboardImage from "assets/images/dashboard-main.png";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Layout>
      {matches && (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: "40px" }}
        >
          <Grid item xs={3} sm={3} md={6}>
            <img src={DashboardImage} alt="dashboard image" />
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};
