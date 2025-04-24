# Business Analytics Dashboard

A responsive React dashboard application for visualizing business analytics data with multiple views, robust filtering, and user switching capabilities.

## Features

- **Multi-User Support**: Switch between different users with unique datasets
- **Dual View Mode**: Toggle between Metrics and Analytics views
- **Advanced Filtering**: Filter data by date range, sectors, categories, and more
- **Interactive Visualizations**: Bar charts and time series visualizations
- **Responsive Data Tables**: Sortable tables with pagination

## Tech Stack

- React 18
- TypeScript
- Material UI (MUI)
- Nivo Charts
- Date-fns

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. The application will be available at http://localhost:3000

## Usage Guide

### User Switching

1. Click on the "My Members" button in the top-right corner
2. A modal will appear showing all available users
3. Select a user to view their specific data
4. The dashboard will update to display the selected user's data

### View Navigation

The dashboard has two main views:
- **Metrics View**: Detailed data tables and bar charts
- **Analytics View**: Time series charts and comparison visuals

Switch between views using the tabs at the top of the dashboard.

### Filtering Data

In the Metrics View, use the filter panel to:
- Set date ranges
- Select specific sectors
- Choose categories
- Customize displayed attributes
- Select which metrics to display

All filters apply across both views and persist when switching between them.

## Data Structure

The application uses mock data with the following structure:

### User Object
```typescript
{
  id: string;
  name: string;
  role: string;
  data: DataItem[];
}
```

### Data Item
```typescript
{
  country: string;
  state: string;
  city: string;
  sector: string;
  category: string;
  startDate: string;
  endDate: string;
  mySpend: SpendMetric;
  sameStoreSpend: SpendMetric;
  newStoreSpend: SpendMetric;
  lostStoreSpend: SpendMetric;
}
```

### Spend Metric
```typescript
{
  current: number;
  reference: number;
  absoluteChange: number;
  percentChange: number;
}
```

## Testing

### Unit Tests

Run the test suite with:
```bash
npm test
```

The project includes tests for:
- Dashboard rendering
- Tab switching functionality
- User selection
- Filter application

### Manual Testing Scenarios

1. **User Switching Test**:
   - Click "My Members"
   - Select a different user
   - Verify the data updates accordingly

2. **Filter Application Test**:
   - Apply date filters
   - Select different sectors/categories
   - Verify data tables and charts update correctly

3. **View Switching Test**:
   - Switch between Metrics and Analytics views
   - Verify that filters persist across views

## Future Enhancements

- Adding export functionality for reports
- Implementing user authentication
- Adding more visualization types
- Supporting data sorting and grouping options

## License

[Your License Information]
