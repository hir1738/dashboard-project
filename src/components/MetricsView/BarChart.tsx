import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { DataItem, FilterState, MetricKey } from "../../types";

interface BarChartProps {
  data: DataItem[];
  filters: FilterState;
}

const BarChart: React.FC<BarChartProps> = ({ data, filters }) => {
  const { selectedMetrics } = filters;

  // Use 'mySpend' as default if no metrics are selected
  const metrics =
    selectedMetrics.length > 0 ? selectedMetrics : (["mySpend"] as MetricKey[]);

  const chartData = useMemo(() => {
    // Group by category for the chart
    const groupedData: { [key: string]: { [key: string]: number } } = {};

    data.forEach((item) => {
      if (!groupedData[item.category]) {
        groupedData[item.category] = {};
      }

      metrics.forEach((metric) => {
        const metricName =
          metric === "mySpend"
            ? "My Spend"
            : metric === "sameStoreSpend"
            ? "Same Store Spend"
            : metric === "newStoreSpend"
            ? "New Store Spend"
            : "Lost Store Spend";

        groupedData[item.category][metricName] =
          (groupedData[item.category][metricName] || 0) + item[metric].current;
      });
    });

    return Object.keys(groupedData).map((category) => ({
      category,
      ...groupedData[category],
    }));
  }, [data, metrics]);

  const metricColors = {
    "My Spend": "rgb(97, 205, 187)",
    "Same Store Spend": "rgb(244, 117, 96)",
    "New Store Spend": "rgb(241, 225, 91)",
    "Lost Store Spend": "rgb(232, 193, 160)",
  };

  const keys = metrics.map((metric) =>
    metric === "mySpend"
      ? "My Spend"
      : metric === "sameStoreSpend"
      ? "Same Store Spend"
      : metric === "newStoreSpend"
      ? "New Store Spend"
      : "Lost Store Spend"
  );

  if (chartData.length === 0) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">No data available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Spend by Category
      </Typography>
      <Box sx={{ height: "calc(100% - 32px)" }}>
        <ResponsiveBar
          data={chartData}
          keys={keys}
          indexBy="category"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={({ id }) => metricColors[id as keyof typeof metricColors]}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Category",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Amount ($)",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Spend by category chart"
        />
      </Box>
    </Box>
  );
};

export default BarChart;
