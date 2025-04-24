import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("@mui/material", () => ({
  ThemeProvider: (props: any) => (
    <div data-testid="theme-provider">{props.children}</div>
  ),
  CssBaseline: () => <div data-testid="css-baseline" />,
  createTheme: () => ({}),
}));

jest.mock("@mui/x-date-pickers/LocalizationProvider", () => ({
  LocalizationProvider: (props: any) => (
    <div data-testid="localization-provider">{props.children}</div>
  ),
}));

jest.mock("@mui/x-date-pickers/AdapterDateFns", () => ({
  AdapterDateFns: class {},
}));

jest.mock(
  "./components/Dashboard/Dashboard",
  () =>
    function MockDashboard() {
      return <div data-testid="dashboard-component">Dashboard Component</div>;
    }
);

import App from "./App";

test("renders dashboard component", () => {
  render(<App />);
  expect(screen.getByTestId("dashboard-component")).toBeInTheDocument();
});
