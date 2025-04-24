import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import TimeSeriesChart from "./TimeSeriesChart";
import ComparisonChart from "./ComparisonChart";
import { User, FilterState } from "../../types";

interface AnalyticsViewProps {
  user: User;
  filters: FilterState;
}

const AnalyticsView: React.FC<AnalyticsViewProps> = ({ user, filters }) => {
  const filteredData = user.data.filter((item) => {
    const itemStartDate = new Date(item.startDate);
    const itemEndDate = new Date(item.endDate);

    if (filters.startDate && itemEndDate < filters.startDate) return false;
    if (filters.endDate && itemStartDate > filters.endDate) return false;

    if (filters.sectors.length > 0 && !filters.sectors.includes(item.sector))
      return false;

    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(item.category)
    )
      return false;

    return true;
  });

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Analytics Dashboard
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Paper sx={{ p: 3, height: 450, borderRadius: 0, boxShadow: 2 }}>
          <TimeSeriesChart data={filteredData} filters={filters} />
        </Paper>

        <Paper sx={{ p: 3, height: 450, borderRadius: 0, boxShadow: 2 }}>
          <ComparisonChart data={filteredData} filters={filters} />
        </Paper>
      </Box>
    </Box>
  );
};

export default AnalyticsView;
