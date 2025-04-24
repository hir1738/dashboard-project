import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { DataItem, FilterState, MetricKey } from '../../types';

interface ComparisonChartProps {
  data: DataItem[];
  filters: FilterState;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data, filters }) => {
  const { selectedMetrics } = filters;

  // Use 'mySpend' as default if no metrics are selected
  const metrics = selectedMetrics.length > 0 
    ? selectedMetrics 
    : ['mySpend'] as MetricKey[];
  
  const chartData = useMemo(() => {
    // Group by sector for this chart
    const groupedData: { [key: string]: { 
      [key: string]: { current: number; reference: number; percentChange: number }
    }} = {};
    
    data.forEach(item => {
      if (!groupedData[item.sector]) {
        groupedData[item.sector] = {};
      }
      
      metrics.forEach(metric => {
        const metricName = metric === 'mySpend' ? 'My Spend' : 
                          metric === 'sameStoreSpend' ? 'Same Store Spend' :
                          metric === 'newStoreSpend' ? 'New Store Spend' : 'Lost Store Spend';
        
        if (!groupedData[item.sector][metricName]) {
          groupedData[item.sector][metricName] = {
            current: 0,
            reference: 0,
            percentChange: 0
          };
        }
        
        groupedData[item.sector][metricName].current += item[metric].current;
        groupedData[item.sector][metricName].reference += item[metric].reference;
      });
    });
    
    // Calculate percent change
    Object.keys(groupedData).forEach(sector => {
      Object.keys(groupedData[sector]).forEach(metricName => {
        const { current, reference } = groupedData[sector][metricName];
        if (reference !== 0) {
          groupedData[sector][metricName].percentChange = 
            ((current - reference) / reference) * 100;
        }
      });
    });
    
    return Object.keys(groupedData).map(sector => {
      const result: any = { sector };
      
      Object.keys(groupedData[sector]).forEach(metricName => {
        result[`${metricName} Current`] = groupedData[sector][metricName].current;
        result[`${metricName} % Change`] = groupedData[sector][metricName].percentChange;
      });
      
      return result;
    });
  }, [data, metrics]);

  const keys = metrics.flatMap(metric => {
    const metricName = metric === 'mySpend' ? 'My Spend' : 
                      metric === 'sameStoreSpend' ? 'Same Store Spend' :
                      metric === 'newStoreSpend' ? 'New Store Spend' : 'Lost Store Spend';
    
    return [`${metricName} Current`, `${metricName} % Change`];
  });

  if (chartData.length === 0) {
    return (
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">No data available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Current vs % Change by Sector
      </Typography>
      <Box sx={{ height: 'calc(100% - 32px)' }}>
        <ResponsiveBar
          data={chartData}
          keys={keys}
          indexBy="sector"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sector',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Value',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Sector Comparison Chart"
        />
      </Box>
    </Box>
  );
};

export default ComparisonChart;