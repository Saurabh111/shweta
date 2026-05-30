export const personalInfo = {
  name: "Shweta Sharma",
  title: "Finance & Analytics Professional",
  tagline: "Turning financial data into strategies for grawth",
  subTagline: "Financial Modeling · Quantitative Research · Business Analytics",
  email: "shweta.sh905@gmail.com",
  linkedin: "https://linkedin.com/in/datawithshweta",
  location: "Chandigarh, India",
  about: `A finance professional with a foundation built on rigorous quantitative economics, 
  advanced financial modeling, and applied data analytics. My journey spans international 
  economics research, equity analysis, and enterprise-level analytics — all converging toward 
  one goal: delivering financial insight that drives decisions.`,
  aboutExtended: `Trained in econometrics at the Gokhale Institute and currently pursuing 
  an MBA in Finance and Business Analytics, I bring a combination of theoretical depth 
  and practical modeling experience. I believe financial analysis transforms raw metrics revealing the true operational health of an enterprise.`,
};

export const competencies = [
  {
    category: "Financial Analysis",
    skills: [
      "Financial Statement Analysis",
      "Ratio Analysis",
      "Valuation & Forecasting",
      "Cash Flow Analysis",
      "Industry Benchmarking",
    ],
  },
  {
    category: "Modeling & Valuation",
    skills: [
      "Excel Financial Models",
      "DCF Modeling",
      "Scenario Analysis",
      "Variance and Sensitivity Analysis",
      "Dashboard Design",
    ],
  },
  {
    category: "Quantitative Methods",
    skills: [
      "Econometrics (OLS, ARIMA, SARIMA)",
      "Regression Analysis",
      "Time Series Forecasting",
      "Hypothesis Testing",
      "Statistical Inference",
    ],
  },
  {
    category: "Tools & Technology",
    skills: [
      "Advanced Excel & VBA",
      "Power BI",
      "Python (Pandas, NumPy)",
      "SQL",
      "Power Query",
    ],
  },
];

export const education = [
  {
    degree: "MBA — Finance & Business Intelligence",
    institution: "Chandigarh University",
    year: "Pursuing",
    highlight: "Dual specialization in Finance and Business Analytics",
  },
  {
    degree: "M.Sc. — International Economics & Finance",
    institution: "Gokhale Institute of Politics and Economics",
    year: "2018",
    highlight: "Econometrics, Financial Theory, Macroeconomic Modeling",
  },
  {
    degree: "B.A. Hons. — Economics",
    institution: "Delhi University",
    year: "2016",
    highlight: "Statistical Analysis, Microeconomics, Research Methodology",
  },
];

export const certifications = [
  "Financial Modeling & Valuation",
  "Microsoft Power BI Desktop for Business Intelligence",
  "Data Analytics with Excel, SQL & Python",
];

export const experience = [
  {
    role: "Data Analyst",
    company: "DockDevelopers",
    period: "Oct 2022 – Jan 2025",
    highlights: [
      "Conducted credit fraud risk analysis by deploying and evaluating three supervised classification models Logistic Regression, Random Forest, and Decision Tree to assess effectiveness in detecting fraudulent financial transactions.",
      "Performed Exploratory Data Analysis on transaction datasets to uncover fraud patterns, class imbalances, and feature relationships ahead of model development.",
      "Engineered categorical transaction variables using OneHotEncoder to ensure clean, model-ready financial data across the analytical pipeline.",
      "Benchmarked model performance across Precision, Recall, F1-Score, AUC-ROC, and Confusion Matrix prioritising recall optimisation to minimise undetected fraud exposure and reduce false negative risk.",
      "Communicated model findings and risk trade-offs to clients in project review meetings, translating statistical outputs into actionable business risk implications.",
    ],
  },
];

// Tata Power Financial Data
export const liquidityData = [
  { year: "FY21", currentRatio: 1.01, quickRatio: 0.69 },
  { year: "FY22", currentRatio: 0.81, quickRatio: 0.73 },
  { year: "FY23", currentRatio: 0.88, quickRatio: 0.71 },
  { year: "FY24", currentRatio: 0.87, quickRatio: 0.62 },
  { year: "FY25", currentRatio: 0.8, quickRatio: 0.66 },
];

export const profitabilityData = [
  { year: "FY21", npm: 3.5, roa: 1.58, roe: 4.8 },
  { year: "FY22", npm: 4.0, roa: 2.48, roe: 9.6 },
  { year: "FY23", npm: 14.9, roa: 3.17, roe: 12.6 },
  { year: "FY24", npm: 7.0, roa: 3.2, roe: 11.4 },
  { year: "FY25", npm: 7.3, roa: 3.23, roe: 11.5 },
];

export const revenueData = [
  { year: "FY21", revenue: 33143.67, netProfit: 1439.05 },
  { year: "FY22", revenue: 42816.04, netProfit: 2156.26 },
  { year: "FY23", revenue: 55109.17, netProfit: 3810.97 },
  { year: "FY24", revenue: 61542.75, netProfit: 4280.84 },
  { year: "FY25", revenue: 64502.91, netProfit: 4775.06 },
];

export const leverageData = [
  { year: "FY21", debtToEquity: 2.05, interestCoverage: 1.2 },
  { year: "FY22", debtToEquity: 2.26, interestCoverage: 2.55 },
  { year: "FY23", debtToEquity: 1.75, interestCoverage: 2.52 },
  { year: "FY24", debtToEquity: 1.59, interestCoverage: 2.1 },
  { year: "FY25", debtToEquity: 1.6, interestCoverage: 1.6 },
];

export const efficiencyData = [
  {
    year: "FY21",
    inventoryTurnover: 5.03,
    debtorsTurnover: 70,
    fixedAssetsTurnover: 1.36,
  },
  {
    year: "FY22",
    inventoryTurnover: 7.46,
    debtorsTurnover: 72,
    fixedAssetsTurnover: 0.63,
  },
  {
    year: "FY23",
    inventoryTurnover: 8.79,
    debtorsTurnover: 75,
    fixedAssetsTurnover: 0.82,
  },
  {
    year: "FY24",
    inventoryTurnover: 9.84,
    debtorsTurnover: 72,
    fixedAssetsTurnover: 0.4,
  },
  {
    year: "FY25",
    inventoryTurnover: 5.03,
    debtorsTurnover: 86,
    fixedAssetsTurnover: 0.47,
  },
];

export const keyInsights = [
  {
    metric: "Debt-to-Equity",
    from: "2.05x",
    to: "1.60x",
    label: "FY21 → FY25",
    insight:
      "Optimized capital structure with reduced reliance on debt, enhancing financial stability and lowering risk.",
    positive: true,
  },
  {
    metric: "Interest Coverage",
    from: "1.20x",
    to: "1.60x",
    label: "FY21 → FY25",
    insight:
      "Improved ability to meet interest obligations, reflecting stronger earnings and better cash flow management.",
    positive: true,
  },
  {
    metric: "Revenue Growth",
    from: "₹33143.67 Cr",
    to: "₹64,502.91 Cr",
    label: "FY21 → FY25",
    insight:
      "Robust revenue growth driven by strategic expansion in renewable energy and enhanced operational performance.",
    positive: true,
  },
  {
    metric: "Net Profit Margin",
    from: "3.5%",
    to: "7.30%",
    label: "FY21 → FY25",
    insight:
      "Significant margin improvement reflecting operational efficiencies, cost control, and a shift towards higher-margin renewable energy projects.",
    positive: true,
  },
];
