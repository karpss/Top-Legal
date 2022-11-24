import React from "react";
import "./App.css";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import Home from "./app/pages/Home";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rick and Morty Characters
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Home />
    </div>
  );
}

export default App;
