import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
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

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Домой" {...a11yProps(0)} />
          <Tab label="Учредители" {...a11yProps(1)} />
          <Tab label="Связи" {...a11yProps(2)} />
          <Tab label="Надежность" {...a11yProps(3)} />
          <Tab label="Финансы" {...a11yProps(4)} />
          <Tab label="Госзакупки" {...a11yProps(5)} />
          <Tab label="Суды" {...a11yProps(6)} />
          <Tab label="Долги" {...a11yProps(7)} />
          <Tab label="Проверки" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
