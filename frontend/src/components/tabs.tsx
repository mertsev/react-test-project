import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useParams } from "react-router-dom";
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }

function a11yProps(this: any, index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(this: any) {
  const id: number = useParams();
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const routes = ["/spark/home/1", "/spark/founders/1"];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Домой" component={Link} to={routes[0]} {...a11yProps(id)} />
          <Tab label="Учредители" component={Link} to={routes[1]} {...a11yProps(id)} />
          <Tab label="Связи" component={Link} to={routes[0]} />
          <Tab label="Надежность" component={Link} to={routes[0]} />
          <Tab label="Финансы" component={Link} to={routes[0]} />
          <Tab label="Госзакупки" component={Link} to={routes[0]} />
          <Tab label="Суды" component={Link} to={routes[0]} />
          <Tab label="Долги" component={Link} to={routes[0]} />
          <Tab label="Проверки" component={Link} to={routes[0]} />
        </Tabs>
      </AppBar>
    </div>
  );
}
