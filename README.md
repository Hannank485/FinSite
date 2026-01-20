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
