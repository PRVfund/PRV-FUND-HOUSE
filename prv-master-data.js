// ============================================================
// PRV FUND HOUSE — MASTER DATA
// Source: PRV_Fund_House_Master_Dashboard.xlsx
// ============================================================

const PRV_DATA = {

  meta: {
    name: "PRV FUND HOUSE",
    version: "1.0",
    purpose:
      "Organize, score and monitor PRV funds; watchlist status is not a buy signal.",
    lastUpdated: "2026-08-23"
  },

  // ==========================================================
  // MARKET CONTROL
  // ==========================================================

  marketControl: {
    marketRegime: {
      value: "Not populated",
      status: "🟡 Review when live data is loaded"
    },

    smallcapValuation: {
      value: "Not populated",
      status: "🟡"
    },

    fiiDiiMfFlow: {
      value: "Not populated",
      status: "🟡"
    },

    breadth: {
      value: "Not populated",
      status: "🟡"
    },

    sectorRotation: {
      value: "Not populated",
      status: "🟡"
    }
  },

  // ==========================================================
  // FUND MASTER
  // ==========================================================

  funds: [

    {
      name: "PRV Compounder Discovery Fund",
      horizon: "3–5Y",
      stocks: 5,
      status: "Locked Watchlist",
      action: "Correction + valuation re-test"
    },

    {
      name: "PRV Alpha Growth Fund",
      horizon: "Long-term",
      stocks: 5,
      status: "Locked Watchlist",
      action: "Research/re-test"
    },

    {
      name: "PRV Early Growth Fund",
      horizon: "Long-term",
      stocks: 7,
      status: "Locked Watchlist",
      action: "Quarterly review"
    },

    {
      name: "PRV Institutional Conviction Fund",
      horizon: "Long-term",
      stocks: 30,
      status: "Locked Watchlist",
      action: "Correction + fresh institutional data"
    },

    {
      name: "PRV Sector Rotation Early Stage Fund",
      horizon: "3–12M",
      stocks: null,
      status: "Framework",
      action: "Sector gate first"
    },

    {
      name: "PRV Swing Core",
      horizon: "1–6W",
      stocks: 6,
      status: "Active research",
      action: "Technical + fundamentals"
    },

    {
      name: "PRV Growth Fund",
      horizon: "1–3Y",
      stocks: null,
      status: "Framework",
      action: "Growth + valuation"
    },

    {
      name: "PRV Smallcap Rotation",
      horizon: "Market cycle",
      stocks: null,
      status: "Framework",
      action: "Cycle/rotation monitor"
    }

  ],

  // ==========================================================
  // STOCK MASTER
  // ==========================================================

  stocks: [

    {
      name: "MAN Industries",
      ticker: "MANINDS",
      fundGroup: "Compounder Discovery",
      score: 91,
      role: "Core",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "VA Tech Wabag",
      ticker: "WABAG",
      fundGroup: "Compounder Discovery",
      score: 89,
      role: "Core",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Atlanta Electricals",
      ticker: "ATLANTA",
      fundGroup: "Compounder Discovery",
      score: 88,
      role: "Core Growth",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Quality Power",
      ticker: "QUALITYPOWER",
      fundGroup: "Compounder Discovery",
      score: 86,
      role: "Growth",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Shaily Engineering Plastics",
      ticker: "SHAILY",
      fundGroup: "Compounder Discovery",
      score: 84,
      role: "Quality / valuation entry",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Fineotex Chemical",
      ticker: "FINEOTEX",
      fundGroup: "Compounder Watch",
      score: 82,
      role: "Watch",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Aeroflex Industries",
      ticker: "AEROFLEX",
      fundGroup: "Compounder Watch",
      score: 84,
      role: "Watch",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Kalyani Forge",
      ticker: "KALYANIFORGE",
      fundGroup: "Compounder Watch",
      score: 83,
      role: "Watch",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Welspun Corp",
      ticker: "WELSPUN",
      fundGroup: "Compounder Watch",
      score: 81,
      role: "Watch",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    },

    {
      name: "Balu Forge",
      ticker: "BALUFORGE",
      fundGroup: "Compounder Watch",
      score: 78,
      role: "Watch",
      status: "Watchlist",

      salesGrowth3Y: null,
      patGrowth3Y: null,
      roce: null,
      roe: null,
      cfoPat: null,
      debtEquity: null,

      action: "WAIT / RE-TEST"
    }

  ],

  // ==========================================================
  // PRV 100-POINT FORENSIC SCORE
  // ==========================================================

  forensicScore: {

    totalPoints: 100,

    factors: [

      {
        factor: "Future Market / TAM",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Sales Growth",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "PAT / Earnings Growth",
        weight: 15,
        rule: "Score with current verified data"
      },

      {
        factor: "ROCE / ROE",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Cash Flow",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Balance Sheet",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Capex / CWIP / Capacity",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Order Book / Demand",
        weight: 10,
        rule: "Score with current verified data"
      },

      {
        factor: "Management / Promoter",
        weight: 5,
        rule: "Score with current verified data"
      },

      {
        factor: "Institutional Trend",
        weight: 5,
        rule: "Score with current verified data"
      },

      {
        factor: "Valuation",
        weight: 5,
        rule: "Score with current verified data"
      }

    ],

    grades: [
      {
        range: "90–100",
        label: "Exceptional"
      },
      {
        range: "80–89",
        label: "Strong"
      },
      {
        range: "70–79",
        label: "Watch"
      },
      {
        range: "60–69",
        label: "Weak"
      },
      {
        range: "<60",
        label: "Reject"
      }
    ]

  },

  // ==========================================================
  // VALUATION ENGINE
  // ==========================================================

  valuation: [

    {
      stock: "MAN Industries",
      currentPrice: null,
      currentEPS: null,
      fy27EPS: null,
      fy28EPS: null,
      fy29EPS: null,
      reasonablePE: null,
      fy29FairValue: null
    },

    {
      stock: "VA Tech Wabag",
      currentPrice: null,
      currentEPS: null,
      fy27EPS: null,
      fy28EPS: null,
      fy29EPS: null,
      reasonablePE: null,
      fy29FairValue: null
    },

    {
      stock: "Atlanta Electricals",
      currentPrice: null,
      currentEPS: null,
      fy27EPS: null,
      fy28EPS: null,
      fy29EPS: null,
      reasonablePE: null,
      fy29FairValue: null
    },

    {
      stock: "Quality Power",
      currentPrice: null,
      currentEPS: null,
      fy27EPS: null,
      fy28EPS: null,
      fy29EPS: null,
      reasonablePE: null,
      fy29FairValue: null
    },

    {
      stock: "Shaily Engineering Plastics",
      currentPrice: null,
      currentEPS: null,
      fy27EPS: null,
      fy28EPS: null,
      fy29EPS: null,
      reasonablePE: null,
      fy29FairValue: null
    }

  ],

  // ==========================================================
  // QUARTERLY FORENSIC REVIEW
  // ==========================================================

  quarterlyReview: [

    {
      stock: "MAN Industries",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "VA Tech Wabag",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Atlanta Electricals",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Quality Power",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Shaily Engineering Plastics",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Fineotex Chemical",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Aeroflex Industries",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Kalyani Forge",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Welspun Corp",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    },

    {
      stock: "Balu Forge",
      quarter: "Q1 FY27",
      sales: null,
      ebitda: null,
      pat: null,
      cfo: null,
      roce: null,
      thesisStatus: "Not yet reviewed"
    }

  ],

  // ==========================================================
  // RISK & EXIT ENGINE
  // ==========================================================

  riskExit: [

    "MAN Industries",
    "VA Tech Wabag",
    "Atlanta Electricals",
    "Quality Power",
    "Shaily Engineering Plastics",
    "Fineotex Chemical",
    "Aeroflex Industries",
    "Kalyani Forge",
    "Welspun Corp",
    "Balu Forge"

  ].map(stock => ({

    stock,

    earnings: "Monitor",
    roce: "Monitor",
    cfoPat: "Monitor",
    debt: "Monitor",
    orderBook: "Monitor",
    promoterManagement: "Monitor",

    thesis:
      "No automatic exit; re-research if multiple warnings"

  })),

  // ==========================================================
  // FUND OVERLAP & CONVICTION
  // ==========================================================

  fundOverlap: [

    {
      stock: "MAN Industries",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "VA Tech Wabag",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Atlanta Electricals",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Quality Power",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Shaily Engineering Plastics",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Fineotex Chemical",
      compounder: "✅",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Aeroflex Industries",
      compounder: "Watch",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Kalyani Forge",
      compounder: "Watch",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Welspun Corp",
      compounder: "Watch",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    },

    {
      stock: "Balu Forge",
      compounder: "Watch",
      alpha: "—",
      earlyGrowth: "—",
      institutional: "—",
      swing: "—",
      overallConviction: "Pending full fund mapping"
    }

  ]

};


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getStock(name) {
  return PRV_DATA.stocks.find(
    stock => stock.name.toLowerCase() === name.toLowerCase()
  );
}


function getStockByTicker(ticker) {
  return PRV_DATA.stocks.find(
    stock => stock.ticker.toLowerCase() === ticker.toLowerCase()
  );
}


function getFund(name) {
  return PRV_DATA.funds.find(
    fund => fund.name.toLowerCase() === name.toLowerCase()
  );
}


function getForensicGrade(score) {

  if (score >= 90) return "Exceptional";
  if (score >= 80) return "Strong";
  if (score >= 70) return "Watch";
  if (score >= 60) return "Weak";

  return "Reject";
}


function getWatchlistStocks() {

  return PRV_DATA.stocks.filter(
    stock => stock.status === "Watchlist"
  );

}


// ============================================================
// PRV DECISION RULE
// ============================================================

const PRV_DECISION_RULE = {

  fundamentalStrongTechnicalWeak:
    "Fundamentally Ready — Technically Waiting / Watch-Recovery",

  freshAccumulation:
    "Do not make fresh accumulation until technical recovery/confirmation.",

  fundamentalDeterioration:
    "Reduce / Exit review",

  structuralTechnicalBreakdown:
    "Reduce / Exit review",

  fundamentalStrongTechnicalStrong:
    "Hold / Buy",

  watchlist:
    "Watchlist is not an automatic BUY signal."

};


// ============================================================
// PRV-FEE — FORWARD EARNINGS ESTIMATE
// ============================================================

const PRV_FEE = {

  name: "PRV Forward Earnings Estimate",

  purpose:
    "Estimate next-quarter Revenue, EBITDA and PAT stock-by-stock.",

  inputs: [

    "Prior quarter trend",
    "YoY trend",
    "Order book",
    "Execution timing",
    "New orders / business activity",
    "Capacity utilisation",
    "New capacity",
    "Management guidance / concall",
    "Industry demand",
    "Margin indicators",
    "Raw-material indicators",
    "Pricing indicators",
    "Working capital",
    "Cash-flow trend"

  ],

  outputs: [

    "Next Quarter Revenue Estimate",
    "Next Quarter EBITDA Estimate",
    "Next Quarter EBITDA Margin",
    "Next Quarter PAT Estimate",
    "YoY PAT Growth Estimate",
    "QoQ PAT Growth Estimate",
    "Confidence Level",
    "Key Positive Trigger",
    "Key Risk"

  ]

};


// ============================================================
// SECTOR ROTATION — EARLY STAGE FRAMEWORK
// ============================================================

const SECTOR_ROTATION_GATE = {

  minimumPositiveSignals: 4,

  totalSignals: 6,

  signals: [

    "Sector Relative Strength",
    "Earnings Growth",
    "Institutional Flow",
    "Sector Breadth",
    "Price / Volume",
    "Valuation"

  ],

  rule:
    "Sector qualifies as Early Rotation only when at least 4 of 6 signals are positive."

};


// ============================================================
// MASTER EXPORT
// ============================================================

// Browser
if (typeof window !== "undefined") {
  window.PRV_DATA = PRV_DATA;
  window.PRV_FEE = PRV_FEE;
  window.PRV_DECISION_RULE = PRV_DECISION_RULE;
  window.SECTOR_ROTATION_GATE = SECTOR_ROTATION_GATE;
}

// Node / module support
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PRV_DATA,
    PRV_FEE,
    PRV_DECISION_RULE,
    SECTOR_ROTATION_GATE
  };
}
