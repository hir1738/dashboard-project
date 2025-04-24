import React, { useMemo } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataItem, FilterState, AttributeKey, MetricKey } from "../../types";

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  data: DataItem[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  data,
}) => {
  const sectors = useMemo(
    () => Array.from(new Set(data.map((item) => item.sector))),
    [data]
  );

  const categories = useMemo(
    () => Array.from(new Set(data.map((item) => item.category))),
    [data]
  );

  const attributeOptions: { value: AttributeKey; label: string }[] = [
    { value: "country", label: "Country" },
    { value: "state", label: "State" },
    { value: "city", label: "City" },
    { value: "sector", label: "Sector" },
    { value: "category", label: "Category" },
  ];

  const metricOptions: { value: MetricKey; label: string }[] = [
    { value: "mySpend", label: "My Spend" },
    { value: "sameStoreSpend", label: "Same Store Spend" },
    { value: "newStoreSpend", label: "New Store Spend" },
    { value: "lostStoreSpend", label: "Lost Store Spend" },
  ];

  const maxDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 1);

  const handleSectorChange = (event: SelectChangeEvent<string[]>) => {
    onFilterChange({ sectors: event.target.value as string[] });
  };

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    onFilterChange({ categories: event.target.value as string[] });
  };

  const handleAttributeChange = (event: SelectChangeEvent<AttributeKey[]>) => {
    onFilterChange({
      selectedAttributes: event.target.value as AttributeKey[],
    });
  };

  const handleMetricChange = (event: SelectChangeEvent<MetricKey[]>) => {
    onFilterChange({
      selectedMetrics: event.target.value as MetricKey[],
    });
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "48%" } }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: "1 1 50%" }}>
                <DatePicker
                  label="Start Date"
                  value={filters.startDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  onChange={(date) => onFilterChange({ startDate: date })}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Box>
              <Box sx={{ flex: "1 1 50%" }}>
                <DatePicker
                  label="End Date"
                  value={filters.endDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  onChange={(date) => onFilterChange({ endDate: date })}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Box>
            </Box>
          </LocalizationProvider>
        </Box>

        <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "48%" } }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: "1 1 50%" }}>
              <FormControl fullWidth>
                <InputLabel>Sector</InputLabel>
                <Select
                  multiple
                  value={filters.sectors}
                  onChange={handleSectorChange}
                  input={<OutlinedInput label="Sector" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {sectors.map((sector) => (
                    <MenuItem key={sector} value={sector}>
                      <Checkbox
                        checked={filters.sectors.indexOf(sector) > -1}
                      />
                      <ListItemText primary={sector} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: "1 1 50%" }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  multiple
                  value={filters.categories}
                  onChange={handleCategoryChange}
                  input={<OutlinedInput label="Category" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      <Checkbox
                        checked={filters.categories.indexOf(category) > -1}
                      />
                      <ListItemText primary={category} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "48%" } }}>
          <FormControl fullWidth>
            <InputLabel>Group By Attributes</InputLabel>
            <Select
              multiple
              value={filters.selectedAttributes}
              onChange={handleAttributeChange}
              input={<OutlinedInput label="Group By Attributes" />}
              renderValue={(selected) =>
                selected
                  .map((attr) => {
                    const option = attributeOptions.find(
                      (opt) => opt.value === attr
                    );
                    return option ? option.label : attr;
                  })
                  .join(", ")
              }
            >
              {attributeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox
                    checked={
                      filters.selectedAttributes.indexOf(option.value) > -1
                    }
                  />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ flex: "1 1 100%", maxWidth: { xs: "100%", md: "48%" } }}>
          <FormControl fullWidth>
            <InputLabel>Metrics</InputLabel>
            <Select
              multiple
              value={filters.selectedMetrics}
              onChange={handleMetricChange}
              input={<OutlinedInput label="Metrics" />}
              renderValue={(selected) =>
                selected
                  .map((metric) => {
                    const option = metricOptions.find(
                      (opt) => opt.value === metric
                    );
                    return option ? option.label : metric;
                  })
                  .join(", ")
              }
            >
              {metricOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox
                    checked={filters.selectedMetrics.indexOf(option.value) > -1}
                  />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterPanel;
