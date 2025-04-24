// src/components/MetricsView/index.tsx
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import FilterPanel from "./FilterPanel";
import DataTable from "./DataTable";
import BarChart from "./BarChart";
import { User, FilterState } from "../../types";

interface MetricsViewProps {
  user: User;
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

const MetricsView: React.FC<MetricsViewProps> = ({
  user,
  filters,
  onFilterChange,
}) => {
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
      <FilterPanel
        filters={filters}
        onFilterChange={onFilterChange}
        data={user.data}
      />

      <Paper
        sx={{
          mb: 4,
          borderRadius: 0,
          boxShadow: 2,
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: 2, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Typography variant="h6" fontWeight={600}>
            Data Table
          </Typography>
        </Box>
        <DataTable data={filteredData} filters={filters} />
      </Paper>

      <Paper
        sx={{
          p: 2,
          height: 450,
          borderRadius: 0,
          boxShadow: 2,
        }}
      >
        <Box sx={{ height: "100%" }}>
          <BarChart data={filteredData} filters={filters} />
        </Box>
      </Paper>
    </Box>
  );
};

export default MetricsView;
