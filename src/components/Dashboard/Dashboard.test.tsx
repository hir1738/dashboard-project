import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { User, FilterState } from "../../types";
import Dashboard from "./Dashboard";
import { mockUsers } from "../../data/mockUsers";

// Mock the date-related modules first to avoid ESM import issues
jest.mock("@mui/x-date-pickers/LocalizationProvider", () => ({
  LocalizationProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("@mui/x-date-pickers/AdapterDateFns", () => ({
  AdapterDateFns: jest.fn(),
}));

interface MetricsViewProps {
  user: User;
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

interface AnalyticsViewProps {
  user: User;
  filters: FilterState;
}

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  users: User[];
  onSelectUser: (user: User) => void;
  currentUser: User;
}

jest.mock("../MetricsView", () => {
  return function MockMetricsView({
    user,
    filters: _filters,
    onFilterChange,
  }: MetricsViewProps) {
    return (
      <div data-testid="metrics-view">
        <div>User: {user.name}</div>
        <button
          data-testid="change-filter-btn"
          onClick={() => onFilterChange({ sectors: ["Retail"] })}
        >
          Change Filter
        </button>
      </div>
    );
  };
});

jest.mock("../AnalyticsView", () => {
  return function MockAnalyticsView({ user, filters }: AnalyticsViewProps) {
    return (
      <div data-testid="analytics-view">
        <div>User: {user.name}</div>
        <div>Filters: {filters.sectors.join(", ") || "None"}</div>
      </div>
    );
  };
});

jest.mock("../UserModal/UserModal", () => {
  return function MockUserModal({
    open,
    onClose,
    users,
    onSelectUser,
    currentUser,
  }: UserModalProps) {
    if (!open) return null;
    return (
      <div data-testid="user-modal">
        <div>Current User: {currentUser.name}</div>
        <button
          data-testid="select-user-btn"
          onClick={() => onSelectUser(users[1])}
        >
          Select Jane Smith
        </button>
        <button data-testid="close-modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };
});

const theme = createTheme();

const renderWithProviders = (ui: React.ReactElement): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
};

describe("Dashboard Component", () => {
  test("renders dashboard with default Metrics View tab", () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("My Members")).toBeInTheDocument();
    const tabMetricsView = screen.getByRole("tab", { name: /metrics view/i });
    expect(tabMetricsView).toHaveAttribute("aria-selected", "true");
    expect(screen.getByTestId("metrics-view")).toBeInTheDocument();
    expect(screen.queryByTestId("analytics-view")).not.toBeInTheDocument();
  });

  test("switches to Analytics View when tab is clicked", () => {
    renderWithProviders(<Dashboard />);
    const tabAnalyticsView = screen.getByRole("tab", {
      name: /analytics view/i,
    });
    fireEvent.click(tabAnalyticsView);
    expect(tabAnalyticsView).toHaveAttribute("aria-selected", "true");
    expect(screen.getByTestId("analytics-view")).toBeInTheDocument();
    expect(screen.queryByTestId("metrics-view")).not.toBeInTheDocument();
  });

  test("opens user modal when My Members button is clicked", () => {
    renderWithProviders(<Dashboard />);
    const myMembersButton = screen.getByText("My Members");
    fireEvent.click(myMembersButton);
    expect(screen.getByTestId("user-modal")).toBeInTheDocument();
    expect(screen.getByText("Current User: John Doe")).toBeInTheDocument();
  });

  test("changes user when a different user is selected", () => {
    renderWithProviders(<Dashboard />);
    const myMembersButton = screen.getByText("My Members");
    fireEvent.click(myMembersButton);
    const selectUserButton = screen.getByTestId("select-user-btn");
    fireEvent.click(selectUserButton);
    expect(screen.queryByTestId("user-modal")).not.toBeInTheDocument();
    expect(screen.getByText("User: Jane Smith")).toBeInTheDocument();
  });

  test("updates filters when filter changes are made", () => {
    renderWithProviders(<Dashboard />);
    const changeFilterButton = screen.getByTestId("change-filter-btn");
    fireEvent.click(changeFilterButton);
    const tabAnalyticsView = screen.getByRole("tab", {
      name: /analytics view/i,
    });
    fireEvent.click(tabAnalyticsView);
    expect(screen.getByText("Filters: Retail")).toBeInTheDocument();
  });

  test("closes user modal when Close button is clicked", () => {
    renderWithProviders(<Dashboard />);
    const myMembersButton = screen.getByText("My Members");
    fireEvent.click(myMembersButton);
    const closeModalButton = screen.getByTestId("close-modal-btn");
    fireEvent.click(closeModalButton);
    expect(screen.queryByTestId("user-modal")).not.toBeInTheDocument();
  });
});