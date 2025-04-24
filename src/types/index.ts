export interface SpendMetric {
    current: number;
    reference: number;
    absoluteChange: number;
    percentChange: number;
  }
  
  export interface DataItem {
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
  
  export type User = {
    id: string;
    name: string;
    role: string;
    data: DataItem[];
  };
  
  export type AttributeKey = 'country' | 'state' | 'city' | 'sector' | 'category';
  export type MetricKey = 'mySpend' | 'sameStoreSpend' | 'newStoreSpend' | 'lostStoreSpend';
  
  export interface FilterState {
    startDate: Date | null;
    endDate: Date | null;
    sectors: string[];
    categories: string[];
    selectedAttributes: AttributeKey[];
    selectedMetrics: MetricKey[];
  }