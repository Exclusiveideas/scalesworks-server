

// Cell positions mapping
const cellPosition = {
  "Page 1": {
    Name: "C3",
    "Docket No.": "S3",
    "GROSS MONTHLY RECEIPTS": "T7",
    "Cost of goods sold": "T12",
    Advertising: "T13",
    "Bad Debts": "T14",
    "Motor Vehicles": "T15",
    Gas: "T16",
    Insurance: "T17",
    Maintenance: "T18",
    Registration: "T19",
    Commissions: "T20",
    Depletion: "T21",
    "Dues and Publications": "T22",
    "Employee Benefit Programs": "T23",
    Freight: "T24",
    "Insurance one key": "B26",
    "Insurance one value": "T26",
    "Insurance two key": "B27",
    "Insurance two value": "T27",
    "Interest on mortgage to banks": "T28",
    "Interest on loans": "T29",
    "Legal and Professional services": "T30",
    "Office expenses": "T31",
    "Laundry and cleaning": "T32",
    "Pension and profit sharing": "T33",
    "Rent on leased equipment": "T34",
    "Machinery/Equipment": "T35",
    "Other business property": "T36",
    Repairs: "T37",
    Supplies: "T38",
    Taxes: "T39",
    Travel: "T40",
    "Meals and entertainment": "T41",
    "Utilities and phones": "T42",
    Wages: "T43",
    "Other expenses one key": "B45",
    "Other expenses one value": "T45",
    "Other expenses two key": "B46",
    "Other expenses two value": "T46",
  },
  "Page 2": {
    "TOTAL MONTHLY EXPENSES": "T3",
    "WEEKLY BUSINESS INCOME": "T6",
    "Seasonal Business": "K11",
    "Monthly Income Percentage": [
      { Month: "January", "Percentage Income": "I16", expenses: "T16" },
      { Month: "February", "Percentage Income": "I17", expenses: "T17" },
      { Month: "March", "Percentage Income": "I18", expenses: "T18" },
      { Month: "April", "Percentage Income": "I19", expenses: "T19" },
      { Month: "May", "Percentage Income": "I20", expenses: "T20" },
      { Month: "June", "Percentage Income": "I21", expenses: "T21" },
      { Month: "July", "Percentage Income": "I22", expenses: "T22" },
      { Month: "August", "Percentage Income": "I23", expenses: "T23" },
      { Month: "September", "Percentage Income": "I24", expenses: "T24" },
      { Month: "October", "Percentage Income": "I25", expenses: "T25" },
      { Month: "November", "Percentage Income": "I26", expenses: "T26" },
      { Month: "December", "Percentage Income": "I27", expenses: "T27" },
    ],
    "Business Accounts Basis": "T29",
    "Fiscal Year Start": "B33",
    "Fiscal Year End": "Q33",
    "Gross Receipts Year to Date": "T36",
    "Gross Expenses Year to Date": "T39",
  },
};

module.exports = { cellPosition };




// const cellPosition = {
//   "Page 1": {
//     Name: "C3",
//     "Docket No.": "S3",
//     "GROSS MONTHLY RECEIPTS": "T7",
//     "Cost of goods sold": "T12",
//     Advertising: "T13",
//     "Bad Debts": "T14",
//     "Motor Vehicles": "T15",
//     Gas: "T16",
//     Insurance: "T17",
//     Maintenance: "T18",
//     Registration: "T19",
//     Commissions: "T20",
//     Depletion: "T21",
//     "Dues and Publications": "T22",
//     "Employee Benefit Programs": "T23",
//     Freight: "T24",
//     "Insurance one key": "B26",
//     "Insurance one value": "T26",
//     "Insurance two key": "B27",
//     "Insurance two value": "T27",
//     "Interest on mortgage to banks": "T28",
//     "Interest on loans": "T29",
//     "Legal and Professional services": "T30",
//     "Office expenses": "T31",
//     "Laundry and cleaning": "T32",
//     "Pension and profit sharing": "T33",
//     "Rent on leased equipment": "T34",
//     "Machinery/Equipment": "T35",
//     "Other business property": "T36",
//     Repairs: "T37",
//     Supplies: "T38",
//     Taxes: "T39",
//     Travel: "T40",
//     "Meals and entertainment": "T41",
//     "Utilities and phones": "T42",
//     Wages: "T43",
//     "Other expenses one key": "B45",
//     "Other expenses one value": "T45",
//     "Other expenses two key": "B46",
//     "Other expenses two value": "T46",
//   },
//   "Page 2": {
//     "TOTAL MONTHLY EXPENSES": "T3",
//     "WEEKLY BUSINESS INCOME": "T6",
//     "Seasonal Business": "K11",
//     "Monthly Income Percentage": [
//       {
//         Month: "January",
//         "Percentage Income": "I16",
//         expenses: "T16",
//       },
//       {
//         Month: "February",
//         "Percentage Income": "I17",
//         expenses: "T17",
//       },
//       {
//         Month: "March",
//         "Percentage Income": "I18",
//         expenses: "T18",
//       },
//       {
//         Month: "April",
//         "Percentage Income": "I19",
//         expenses: "T19",
//       },
//       {
//         Month: "May",
//         "Percentage Income": "I20",
//         expenses: "T20",
//       },
//       {
//         Month: "June",
//         "Percentage Income": "I21",
//         expenses: "T21",
//       },
//       {
//         Month: "July",
//         "Percentage Income": "I22",
//         expenses: "T22",
//       },
//       {
//         Month: "August",
//         "Percentage Income": "I23",
//         expenses: "T23",
//       },
//       {
//         Month: "September",
//         "Percentage Income": "I24",
//         expenses: "T24",
//       },
//       {
//         Month: "October",
//         "Percentage Income": "I25",
//         expenses: "T25",
//       },
//       {
//         Month: "November",
//         "Percentage Income": "I26",
//         expenses: "T26",
//       },
//       {
//         Month: "December",
//         "Percentage Income": "I27",
//         expenses: "T27",
//       },
//     ],
//     "Business Accounts Basis": "T29",
//     "Fiscal Year Start": "B33",
//     "Fiscal Year End": "Q33",
//     "Gross Receipts Year to Date": "T36",
//     "Gross Expenses Year to Date": "T39",
//   },
// };

// const sampleDocumentData = {
//   "Page 1": {
//     Name: "Muftaudeen Jimoh",
//     "Docket No.": "0123456",
//     "GROSS MONTHLY RECEIPTS": "234567.00",
//     "Cost of goods sold": "345.00",
//     Advertising: "345.00",
//     "Bad Debts": "345.00",
//     "Motor Vehicles": "0.00",
//     Gas: "0.00",
//     Insurance: "345.00",
//     Maintenance: "345.00",
//     Registration: "345.00",
//     Commissions: "345.00",
//     Depletion: "0.00",
//     "Dues and Publications": "0.00",
//     "Employee Benefit Programs": "0.00",
//     Freight: "0.00",
//     "Insurance one key": "life insurance",
//     "Insurance one value": "350.00",
//     "Insurance two key": "med insurance",
//     "Insurance two value": "350.00",
//     "Interest on mortgage to banks": "345.00",
//     "Interest on loans": "345.00",
//     "Legal and Professional services": "345.00",
//     "Office expenses": "0.00",
//     "Laundry and cleaning": "0.00",
//     "Pension and profit sharing": "0.00",
//     "Rent on leased equipment": "0.00",
//     "Machinery/Equipment": "0.00",
//     "Other business property": "567876.00",
//     Repairs: "0.00",
//     Supplies: "567876.00",
//     Taxes: "0.00",
//     Travel: "567876.00",
//     "Meals and entertainment": "0.00",
//     "Utilities and phones": "567876.00",
//     Wages: "0.00",
//     "Other expenses one key": "laundry",
//     "Other expenses one value": "34.00",
//     "Other expenses two key": "netflix & chill",
//     "Other expenses two value": "30.00",
//   },
//   "Page 2": {
//     "TOTAL MONTHLY EXPENSES": "123567.00",
//     "WEEKLY BUSINESS INCOME": "320000.00",
//     "Seasonal Business": "Yes",
//     "Monthly Income Percentage": [
//       {
//         Month: "January",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "February",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "March",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "April",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "May",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "June",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "July",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "August",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "September",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "October",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "November",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//       {
//         Month: "December",
//         "Percentage Income": "20",
//         expenses: "2344.00",
//       },
//     ],
//     "Business Accounts Basis": "FISCAL",
//     "Fiscal Year Start": "February 1, 2024",
//     "Fiscal Year End": "January 31, 2025",
//     "Gross Receipts Year to Date": "567899.00",
//     "Gross Expenses Year to Date": "567899.00",
//   },
// };
