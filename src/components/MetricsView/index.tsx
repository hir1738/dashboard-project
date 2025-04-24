// src/components/MetricsView/index.tsx
import React from "react";
import { Box } from "@mui/material";
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
      <Box sx={{ mt: 3, mb: 4 }}>
        <DataTable data={filteredData} filters={filters} />
      </Box>
      <Box sx={{ height: 400 }}>
        <BarChart data={filteredData} filters={filters} />
      </Box>
    </Box>
  );
};

export default MetricsView;
