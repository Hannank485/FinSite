# FinSite
Financial Planning Web Application

FinSite is a responsive financial planning web application designed to calculate and visualize investment growth using SIP (Systematic Investment Plan) and Lump Sum strategies. The project emphasizes accurate financial calculations, strong input validation, and a guided, card-based user experience.

---

## 🔗 Live Demo

**Live Application:**  
https://fin-site.vercel.app/
---

## Overview

FinSite enables users to select an investment type, enter relevant financial parameters, and instantly view projected returns. The interface dynamically adapts based on user choices, guiding users through a clear step-by-step flow from input to results.

---

## Key Features

### Investment Calculators
- SIP and Lump Sum calculators
- Supports multiple dynamic input combinations across:
  - Rate of Return (ROI)
  - Investment tenure
  - Principal or contribution amount
- Real-time calculation updates based on user input

### Card-Based User Flow
- Step-driven, card-based interface
- User journey:
  1. Select investment type (SIP or Lump Sum)
  2. Enter investment details
  3. View calculated results
- On form submission, the input card transitions into a results card

### Validation and Error Handling
- Strong input validation to prevent invalid or negative values
- Edge-case handling across varying ROI and tenure scenarios
- Dedicated error page for invalid routes and unexpected states

### UI and Experience
- Light mode and dark mode support
- Responsive and accessible layout
- Clear separation between input and result states
- Homepage and Customised 404 Page

### Planned Budgeting Module
- Structured logic for percentage-based budget allocation
- Designed for future integration across core financial categories
- Architecture prepared for scalability

---

## Financial Calculation Logic

### Lump Sum Investment

The future value of a lump sum investment is calculated using the compound interest formula:

FV = P × (1 + r) ^ t

Where:
- FV = future value of the investment  
- P = principal amount invested  
- r = annual rate of return (in decimal form)  
- t = investment tenure in years  

---

### SIP (Systematic Investment Plan)

#### Periodic Rate Conversion

Since SIP investments are typically made on a monthly basis, the annual rate of return is converted into a monthly rate using:

i = (1 + r) ^ (1 / 12) − 1

Where:
- r = annual rate of return (e.g., 0.12 for 12%)
- i = monthly rate of return

This ensures accurate compounding and realistic return projections.

---

#### SIP Maturity Formula

The maturity value of a SIP investment is calculated using:

M = P × ([(1 + i) ^ n − 1] / i) × (1 + i)

Where:
- M = maturity amount  
- P = fixed investment made at regular intervals  
- n = total number of payments  
- i = periodic (monthly) rate of return  

---

### Implementation Notes
- Calculations are performed in real time as users modify inputs
- Input validation ensures only valid numeric values are processed
- Edge cases such as zero tenure, zero investment, and invalid rates are safely handled

---

## Tech Stack

- Frontend: React
- Language: TypeScript
- Styling: Tailwind CSS
- Routing: React Router
- State Management: React Hooks

---

## Getting Started

### Installation
```bash
git clone https://github.com/your-username/finsite.git
cd finsite
npm install
npm run dev```
