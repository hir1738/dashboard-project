import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Dashboard from "./Dashboard";

const theme = createTheme();

// Wrap component with necessary providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {ui}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

describe("Dashboard Component", () => {
  test("renders dashboard with default Metrics View tab", () => {
    renderWithProviders(<Dashboard />);

    // Check that dashboard title is displayed
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    // Check that "My Members" button is displayed
    expect(screen.getByText("My Members")).toBeInTheDocument();

    // Check that Metrics View is the default selected tab
    const tabMetricsView = screen.getByRole("tab", { name: /metrics view/i });
    expect(tabMetricsView).toHaveAttribute("aria-selected", "true");
  });

  test("switches to Analytics View when tab is clicked", () => {
    renderWithProviders(<Dashboard />);

    // Click on Analytics View tab
    const tabAnalyticsView = screen.getByRole("tab", {
      name: /analytics view/i,
    });
    fireEvent.click(tabAnalyticsView);

    // Check that Analytics View is now the selected tab
    expect(tabAnalyticsView).toHaveAttribute("aria-selected", "true");

    // Check that Analytics Dashboard title is displayed
    expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
  });

  test("opens user modal when My Members button is clicked", () => {
    renderWithProviders(<Dashboard />);

    // Click on My Members button
    const myMembersButton = screen.getByText("My Members");
    fireEvent.click(myMembersButton);

    // Check that user modal is displayed
    expect(screen.getByText("Select User")).toBeInTheDocument();
  });
});
