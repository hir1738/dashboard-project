import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { User, FilterState, AttributeKey, MetricKey } from "../../types";
import MetricsView from "../MetricsView";
import AnalyticsView from "../AnalyticsView";
import UserModal from "../UserModal/UserModal";
import { mockUsers } from "../../data/mockUsers";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Dashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);

  const [filters, setFilters] = useState<FilterState>({
    startDate: new Date("2025-03-15"),
    endDate: new Date("2025-05-15"),
    sectors: [],
    categories: [],
    selectedAttributes: [],
    selectedMetrics: [],
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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ borderRadius: 0, overflow: "hidden" }}>
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color="primary"
          >
            Dashboard
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenUserModal(true)}
            startIcon={<PeopleAltIcon />}
            sx={{
              borderRadius: 0,
              boxShadow: 2,
            }}
          >
            My Members
          </Button>
        </Box>

        <Box sx={{ px: 3, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                fontSize: "1rem",
                py: 2,
              },
            }}
          >
            <Tab label="Metrics View" />
            <Tab label="Analytics View" />
          </Tabs>
        </Box>

        <Box sx={{ p: 3 }}>
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
      </Paper>

      <UserModal
        open={openUserModal}
        onClose={() => setOpenUserModal(false)}
        users={mockUsers}
        onSelectUser={handleUserChange}
        currentUser={currentUser}
      />
    </Container>
  );
};

export default Dashboard;
