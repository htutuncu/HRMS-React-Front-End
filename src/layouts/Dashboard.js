import React from "react";
import Navi from "./Navi";
import Sidebar from "./Sidebar";
import Section from "./Section";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Section />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
