import React, { useState } from "react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import { User, FilterState, AttributeKey, MetricKey } from "../../types";
import MetricsView from "../MetricsView";
import AnalyticsView from "../AnalyticsView";
import UserModal from "../UserModal/UserModal";
import { mockUsers } from "../../data/mockUsers";

const Dashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);
  
  const [filters, setFilters] = useState<FilterState>({
    startDate: new Date("2025-04-01"), 
    endDate: new Date("2025-04-24"),  
    sectors: [],
    categories: [],
    selectedAttributes: ["country", "state", "city", "sector", "category"], 
    selectedMetrics: ["mySpend"],
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleUserChange = (user: User) => {
    setCurrentUser(user);
    setOpenUserModal(false);
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <h1>Dashboard</h1>
        <Button variant="contained" onClick={() => setOpenUserModal(true)}>
          My Members
        </Button>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Metrics View" />
        <Tab label="Analytics View" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {tabValue === 0 ? (
          <MetricsView
            user={currentUser}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        ) : (
          <AnalyticsView user={currentUser} filters={filters} />
        )}
      </Box>

      <UserModal
        open={openUserModal}
        onClose={() => setOpenUserModal(false)}
        users={mockUsers}
        onSelectUser={handleUserChange}
        currentUser={currentUser}
      />
    </Box>
  );
};

export default Dashboard;