# Tax-Calculator

This is a web-based tax calculator application developed to help users calculate their income tax based on their income and deductions. The application uses a simple and intuitive user interface to input the necessary details and provides the calculated tax amount.

## Features

- **Income Tax Calculation**: Calculates income tax based on the user's income and deductions.
- **User-friendly Interface**: Easy-to-use interface for entering income details and deductions.
- **Real-time Calculation**: Calculates the tax amount in real-time as the user inputs the data.

## Tax Calculation Formula

The tax calculation works based on the following formula:

- **Overall income (after deductions) under 8 (≤) Lakhs is not taxed.**
    - Ex: If Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
    - If Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax

- **Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at:**
    - 30% for people with age < 40
    - 40% for people with age ≥ 40 but < 60
    - 10% for people with age ≥ 60
