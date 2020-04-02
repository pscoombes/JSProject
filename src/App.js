import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./App.css";
import "typeface-roboto";
import CardDisplay from "./CardDisplay";
import readAll from "./readAll";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px",
    width: "99%"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  const [storedData, storedDataState] = useState(readAll());

  const updateData = (data, uniqueKey) => {
    let thisKey = uniqueKey;
    const newDataState = storedData.map((obj, index) => {
      if (index == thisKey) {
        return data;
      }
      return obj;
    });
    storedDataState(newDataState);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          <img src="awesome_logo.svg" alt="Logo" />
        </Toolbar>
      </AppBar>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {storedData.map((value, index) => {
          return (
            <CardDisplay
              data={value}
              key={index.toString()}
              updateData={updateData}
              uniqueKey={index.toString()}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default App;
