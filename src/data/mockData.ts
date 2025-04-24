import { DataItem } from "../types";

export const mockDataUser1: DataItem[] = [
  {
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    sector: "Retail",
    category: "Juice",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    mySpend: {
      current: 120000,
      reference: 100000,
      absoluteChange: 20000,
      percentChange: 20
    },
    sameStoreSpend: {
      current: 95000,
      reference: 90000,
      absoluteChange: 5000,
      percentChange: 5.56
    },
    newStoreSpend: {
      current: 15000,
      reference: 10000,
      absoluteChange: 5000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 15000,
      absoluteChange: -5000,
      percentChange: -33.33
    }
  },
  {
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    sector: "Retail",
    category: "Snacks",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    mySpend: {
      current: 90000,
      reference: 85000,
      absoluteChange: 5000,
      percentChange: 5.88
    },
    sameStoreSpend: {
      current: 70000,
      reference: 75000,
      absoluteChange: -5000,
      percentChange: -6.67
    },
    newStoreSpend: {
      current: 10000,
      reference: 5000,
      absoluteChange: 5000,
      percentChange: 100
    },
    lostStoreSpend: {
      current: 10000,
      reference: 5000,
      absoluteChange: 5000,
      percentChange: 100
    }
  }
];

export const mockDataUser2: DataItem[] = [
  {
    country: "UK",
    state: "England",
    city: "London",
    sector: "Retail",
    category: "Bakery",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    mySpend: {
      current: 110000,
      reference: 95000,
      absoluteChange: 15000,
      percentChange: 15.79
    },
    sameStoreSpend: {
      current: 85000,
      reference: 80000,
      absoluteChange: 5000,
      percentChange: 6.25
    },
    newStoreSpend: {
      current: 15000,
      reference: 5000,
      absoluteChange: 10000,
      percentChange: 200
    },
    lostStoreSpend: {
      current: 10000,
      reference: 12000,
      absoluteChange: -2000,
      percentChange: -16.67
    }
  },
  {
    country: "UK",
    state: "Scotland",
    city: "Edinburgh",
    sector: "Hospitality",
    category: "Ready Meals",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    mySpend: {
      current: 80000,
      reference: 75000,
      absoluteChange: 5000,
      percentChange: 6.67
    },
    sameStoreSpend: {
      current: 60000,
      reference: 65000,
      absoluteChange: -5000,
      percentChange: -7.69
    },
    newStoreSpend: {
      current: 15000,
      reference: 8000,
      absoluteChange: 7000,
      percentChange: 87.5
    },
    lostStoreSpend: {
      current: 5000,
      reference: 2000,
      absoluteChange: 3000,
      percentChange: 150
    }
  }
];

export const mockDataUser3: DataItem[] = [
  {
    country: "Germany",
    state: "Bavaria",
    city: "Munich",
    sector: "Food",
    category: "Organic Foods",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    mySpend: {
      current: 95000,
      reference: 85000,
      absoluteChange: 10000,
      percentChange: 11.76
    },
    sameStoreSpend: {
      current: 75000,
      reference: 70000,
      absoluteChange: 5000,
      percentChange: 7.14
    },
    newStoreSpend: {
      current: 12000,
      reference: 8000,
      absoluteChange: 4000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 8000,
      reference: 7000,
      absoluteChange: 1000,
      percentChange: 14.29
    }
  },
  {
    country: "Germany",
    state: "Berlin",
    city: "Berlin",
    sector: "Food",
    category: "Dairy Products",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    mySpend: {
      current: 105000,
      reference: 90000,
      absoluteChange: 15000,
      percentChange: 16.67
    },
    sameStoreSpend: {
      current: 80000,
      reference: 75000,
      absoluteChange: 5000,
      percentChange: 6.67
    },
    newStoreSpend: {
      current: 18000,
      reference: 12000,
      absoluteChange: 6000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 7000,
      reference: 3000,
      absoluteChange: 4000,
      percentChange: 133.33
    }
  }
];

export const mockDataUser4: DataItem[] = [
  {
    country: "Australia",
    state: "New South Wales",
    city: "Sydney",
    sector: "Retail",
    category: "Confectionery",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    mySpend: {
      current: 85000,
      reference: 78000,
      absoluteChange: 7000,
      percentChange: 8.97
    },
    sameStoreSpend: {
      current: 65000,
      reference: 60000,
      absoluteChange: 5000,
      percentChange: 8.33
    },
    newStoreSpend: {
      current: 12000,
      reference: 10000,
      absoluteChange: 2000,
      percentChange: 20
    },
    lostStoreSpend: {
      current: 8000,
      reference: 8000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    sector: "Hospitality",
    category: "Coffee & Tea",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    mySpend: {
      current: 110000,
      reference: 90000,
      absoluteChange: 20000,
      percentChange: 22.22
    },
    sameStoreSpend: {
      current: 85000,
      reference: 75000,
      absoluteChange: 10000,
      percentChange: 13.33
    },
    newStoreSpend: {
      current: 20000,
      reference: 12000,
      absoluteChange: 8000,
      percentChange: 66.67
    },
    lostStoreSpend: {
      current: 5000,
      reference: 3000,
      absoluteChange: 2000,
      percentChange: 66.67
    }
  }
];

export const mockDataUser5: DataItem[] = [
  {
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    sector: "Industrial",
    category: "Packaging",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    mySpend: {
      current: 150000,
      reference: 130000,
      absoluteChange: 20000,
      percentChange: 15.38
    },
    sameStoreSpend: {
      current: 120000,
      reference: 110000,
      absoluteChange: 10000,
      percentChange: 9.09
    },
    newStoreSpend: {
      current: 25000,
      reference: 15000,
      absoluteChange: 10000,
      percentChange: 66.67
    },
    lostStoreSpend: {
      current: 5000,
      reference: 5000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "Canada",
    state: "Quebec",
    city: "Montreal",
    sector: "Industrial",
    category: "Raw Materials",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    mySpend: {
      current: 180000,
      reference: 160000,
      absoluteChange: 20000,
      percentChange: 12.5
    },
    sameStoreSpend: {
      current: 140000,
      reference: 130000,
      absoluteChange: 10000,
      percentChange: 7.69
    },
    newStoreSpend: {
      current: 30000,
      reference: 20000,
      absoluteChange: 10000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];

export const mockDataUser6: DataItem[] = [
  {
    country: "Japan",
    state: "Tokyo",
    city: "Tokyo",
    sector: "Retail",
    category: "Electronics",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    mySpend: {
      current: 220000,
      reference: 200000,
      absoluteChange: 20000,
      percentChange: 10
    },
    sameStoreSpend: {
      current: 180000,
      reference: 170000,
      absoluteChange: 10000,
      percentChange: 5.88
    },
    newStoreSpend: {
      current: 30000,
      reference: 20000,
      absoluteChange: 10000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "Japan",
    state: "Osaka",
    city: "Osaka",
    sector: "Retail",
    category: "Apparel",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    mySpend: {
      current: 175000,
      reference: 160000,
      absoluteChange: 15000,
      percentChange: 9.38
    },
    sameStoreSpend: {
      current: 140000,
      reference: 130000,
      absoluteChange: 10000,
      percentChange: 7.69
    },
    newStoreSpend: {
      current: 25000,
      reference: 20000,
      absoluteChange: 5000,
      percentChange: 25
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];

export const mockDataUser7: DataItem[] = [
  {
    country: "Brazil",
    state: "Sao Paulo",
    city: "Sao Paulo",
    sector: "Food",
    category: "Coffee Beans",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    mySpend: {
      current: 130000,
      reference: 120000,
      absoluteChange: 10000,
      percentChange: 8.33
    },
    sameStoreSpend: {
      current: 100000,
      reference: 95000,
      absoluteChange: 5000,
      percentChange: 5.26
    },
    newStoreSpend: {
      current: 20000,
      reference: 15000,
      absoluteChange: 5000,
      percentChange: 33.33
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "Brazil",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    sector: "Food",
    category: "Tropical Fruits",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    mySpend: {
      current: 110000,
      reference: 100000,
      absoluteChange: 10000,
      percentChange: 10
    },
    sameStoreSpend: {
      current: 85000,
      reference: 80000,
      absoluteChange: 5000,
      percentChange: 6.25
    },
    newStoreSpend: {
      current: 15000,
      reference: 10000,
      absoluteChange: 5000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];

export const mockDataUser8: DataItem[] = [
  {
    country: "South Africa",
    state: "Western Cape",
    city: "Cape Town",
    sector: "Food",
    category: "Wine",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    mySpend: {
      current: 140000,
      reference: 120000,
      absoluteChange: 20000,
      percentChange: 16.67
    },
    sameStoreSpend: {
      current: 110000,
      reference: 100000,
      absoluteChange: 10000,
      percentChange: 10
    },
    newStoreSpend: {
      current: 20000,
      reference: 10000,
      absoluteChange: 10000,
      percentChange: 100
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "South Africa",
    state: "Gauteng",
    city: "Johannesburg",
    sector: "Industrial",
    category: "Mining",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    mySpend: {
      current: 250000,
      reference: 220000,
      absoluteChange: 30000,
      percentChange: 13.64
    },
    sameStoreSpend: {
      current: 200000,
      reference: 180000,
      absoluteChange: 20000,
      percentChange: 11.11
    },
    newStoreSpend: {
      current: 35000,
      reference: 25000,
      absoluteChange: 10000,
      percentChange: 40
    },
    lostStoreSpend: {
      current: 15000,
      reference: 15000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];

export const mockDataUser9: DataItem[] = [
  {
    country: "France",
    state: "Île-de-France",
    city: "Paris",
    sector: "Food",
    category: "Cheese",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    mySpend: {
      current: 125000,
      reference: 115000,
      absoluteChange: 10000,
      percentChange: 8.7
    },
    sameStoreSpend: {
      current: 100000,
      reference: 95000,
      absoluteChange: 5000,
      percentChange: 5.26
    },
    newStoreSpend: {
      current: 15000,
      reference: 10000,
      absoluteChange: 5000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "France",
    state: "Provence-Alpes-Côte d'Azur",
    city: "Nice",
    sector: "Food",
    category: "Wine",
    startDate: "2025-02-01",
    endDate: "2025-02-28",
    mySpend: {
      current: 115000,
      reference: 105000,
      absoluteChange: 10000,
      percentChange: 9.52
    },
    sameStoreSpend: {
      current: 90000,
      reference: 85000,
      absoluteChange: 5000,
      percentChange: 5.88
    },
    newStoreSpend: {
      current: 15000,
      reference: 10000,
      absoluteChange: 5000,
      percentChange: 50
    },
    lostStoreSpend: {
      current: 10000,
      reference: 10000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];

export const mockDataUser10: DataItem[] = [
  {
    country: "China",
    state: "Beijing",
    city: "Beijing",
    sector: "Industrial",
    category: "Electronics Manufacturing",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    mySpend: {
      current: 300000,
      reference: 270000,
      absoluteChange: 30000,
      percentChange: 11.11
    },
    sameStoreSpend: {
      current: 240000,
      reference: 220000,
      absoluteChange: 20000,
      percentChange: 9.09
    },
    newStoreSpend: {
      current: 40000,
      reference: 30000,
      absoluteChange: 10000,
      percentChange: 33.33
    },
    lostStoreSpend: {
      current: 20000,
      reference: 20000,
      absoluteChange: 0,
      percentChange: 0
    }
  },
  {
    country: "China",
    state: "Shanghai",
    city: "Shanghai",
    sector: "Retail",
    category: "Luxury Goods",
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    mySpend: {
      current: 280000,
      reference: 250000,
      absoluteChange: 30000,
      percentChange: 12
    },
    sameStoreSpend: {
      current: 220000,
      reference: 200000,
      absoluteChange: 20000,
      percentChange: 10
    },
    newStoreSpend: {
      current: 40000,
      reference: 30000,
      absoluteChange: 10000,
      percentChange: 33.33
    },
    lostStoreSpend: {
      current: 20000,
      reference: 20000,
      absoluteChange: 0,
      percentChange: 0
    }
  }
];