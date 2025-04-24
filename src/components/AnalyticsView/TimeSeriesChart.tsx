import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { DataItem, FilterState, MetricKey } from '../../types';

interface TimeSeriesChartProps {
  data: DataItem[];
  filters: FilterState;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data, filters }) => {
  const { selectedMetrics } = filters;

  // Use 'mySpend' as default if no metrics are selected
  const metrics = selectedMetrics.length > 0 
    ? selectedMetrics 
    : ['mySpend'] as MetricKey[];

  const chartData = useMemo(() => {
    return metrics.map(metric => {
      const metricName = metric === 'mySpend' ? 'My Spend' : 
                     metric === 'sameStoreSpend' ? 'Same Store Spend' :
                     metric === 'newStoreSpend' ? 'New Store Spend' : 'Lost Store Spend';
      
      // For simplicity, we're using the data points directly
      // In a real app, you might want to aggregate by date/month
      const points = data.map(item => ({
        x: item.startDate,
        y: item[metric].current
      }));
      
      // Sort points by date
      points.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());
      
      return {
        id: metricName,
        data: points
      };
    });
  }, [data, metrics]);

  if (chartData.length === 0 || chartData[0].data.length === 0) {
    return (
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">No data available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Spend Over Time
      </Typography>
      <Box sx={{ height: 'calc(100% - 32px)' }}>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount ($)',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          colors={{ scheme: 'category10' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default TimeSeriesChart;