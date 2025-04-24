import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Box,
} from '@mui/material';
import { DataItem, FilterState, AttributeKey, MetricKey } from '../../types';

interface DataTableProps {
  data: DataItem[];
  filters: FilterState;
}

type Order = 'asc' | 'desc';

const DataTable: React.FC<DataTableProps> = ({ data, filters }) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { selectedAttributes, selectedMetrics } = filters;
  
  // Use all attributes and metrics if none are selected
  const attributes = selectedAttributes.length > 0 
    ? selectedAttributes 
    : ['country', 'state', 'city', 'sector', 'category'] as AttributeKey[];
  
  const metrics = selectedMetrics.length > 0 
    ? selectedMetrics 
    : ['mySpend', 'sameStoreSpend', 'newStoreSpend', 'lostStoreSpend'] as MetricKey[];

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Apply sorting
  const sortedData = React.useMemo(() => {
    if (!orderBy) return data;

    return [...data].sort((a, b) => {
      const getNestedValue = (obj: any, path: string) => {
        const parts = path.split('.');
        return parts.reduce((o, key) => (o ? o[key] : null), obj);
      };

      let aValue = getNestedValue(a, orderBy);
      let bValue = getNestedValue(b, orderBy);

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (order === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  }, [data, order, orderBy]);

  // Apply pagination
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Format number as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* Attribute columns */}
              {attributes.map((attr) => (
                <TableCell key={attr}>
                  <TableSortLabel
                    active={orderBy === attr}
                    direction={orderBy === attr ? order : 'asc'}
                    onClick={() => handleRequestSort(attr)}
                  >
                    {attr.charAt(0).toUpperCase() + attr.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}

              {/* Metric columns */}
              {metrics.map((metric) => (
                <React.Fragment key={metric}>
                  <TableCell align="right">
                    <TableSortLabel
                      active={orderBy === `${metric}.current`}
                      direction={orderBy === `${metric}.current` ? order : 'asc'}
                      onClick={() => handleRequestSort(`${metric}.current`)}
                    >
                      {metric === 'mySpend' ? 'My Spend' : 
                       metric === 'sameStoreSpend' ? 'Same Store Spend' :
                       metric === 'newStoreSpend' ? 'New Store Spend' : 'Lost Store Spend'} (Current)
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">Reference</TableCell>
                  <TableCell align="right">Abs Change</TableCell>
                  <TableCell align="right">
                    <TableSortLabel
                      active={orderBy === `${metric}.percentChange`}
                      direction={orderBy === `${metric}.percentChange` ? order : 'asc'}
                      onClick={() => handleRequestSort(`${metric}.percentChange`)}
                    >
                      % Change
                    </TableSortLabel>
                  </TableCell>
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow hover key={index}>
                {/* Attribute cells */}
                {attributes.map((attr) => (
                  <TableCell key={attr}>{row[attr]}</TableCell>
                ))}

                {/* Metric cells */}
                {metrics.map((metric) => (
                  <React.Fragment key={metric}>
                    <TableCell align="right">{formatCurrency(row[metric].current)}</TableCell>
                    <TableCell align="right">{formatCurrency(row[metric].reference)}</TableCell>
                    <TableCell align="right">{formatCurrency(row[metric].absoluteChange)}</TableCell>
                    <TableCell 
                      align="right"
                      sx={{ 
                        color: row[metric].percentChange >= 0 ? 'success.main' : 'error.main' 
                      }}
                    >
                      {row[metric].percentChange}%
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;