import React from "react";
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

  function PurchaseOrders() {
    let storedData = readAll();
    console.log("App 1", storedData.length, storedData);
    let purchaseOrders = [];
    for (let i = 0; i < storedData.length; i++) {
      const element = storedData[i];
      console.log("App 2", element);

      purchaseOrders.push(<CardDisplay data={element} />);
    }
    console.log(purchaseOrders);
    return purchaseOrders;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.root}>
        <Toolbar>
          <img src="awesome_logo.svg" alt="Logo" />
        </Toolbar>
      </AppBar>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <PurchaseOrders />
      </Box>
    </div>
  );
}

export default App;
