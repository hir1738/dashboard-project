import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Dashboard from "./components/Dashboard/Dashboard";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Dashboard />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
