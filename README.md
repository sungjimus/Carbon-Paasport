# Carbon Passport 🌱

A web-based prototype for estimating greenhouse gas emissions from rice cultivation.

## About

Carbon Passport was developed as a solo project for an inter-semester hackathon focused on Rural Development and Agriculture.

The project aims to provide farmers with an accessible way to estimate the greenhouse gas emissions associated with their rice cultivation practices.

Users can enter information about their farm, irrigation methods, fertilizer usage, diesel consumption, and crop residue management to receive an estimated carbon impact.

## Features

- Accepts farm area in hectares or acres.
- Supports different rice cultivation water-management practices:
  - Continuously flooded
  - Intermittently flooded
  - Rain-fed
- Estimates emissions associated with:
  - Methane (CH₄) from rice cultivation
  - Nitrous oxide (N₂O) from fertilizer application
  - Carbon dioxide (CO₂) from diesel consumption
  - CH₄ and N₂O from crop residue burning
- Converts estimated emissions into tonnes of CO₂ equivalent (tCO₂e).
- Dynamically displays form fields based on user selections.
- Stores farmer information and calculation results using browser SessionStorage.

## Methodology

The prototype uses emission factors and calculation methods informed by IPCC references and India-specific context.

The estimation considers different sources of greenhouse gas emissions associated with rice cultivation and combines them into a total estimated CO₂-equivalent value.

A methodology reference document is included in this repository for additional context.

## Technologies Used

- **HTML5** – Page structure and input forms
- **CSS3** – Styling and layout
- **JavaScript** – Application logic, input validation, and emission calculations
- **SessionStorage** – Temporary browser-side data storage

## Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/sungjimus/Carbon-Paasport.git
   ```

2. Navigate into the frontend directory:

   ```bash
   cd Carbon-Paasport/frontend
   ```

3. Open `index.html` in a web browser.

No build tools or package installation are required.

## Disclaimer

Carbon Passport is an experimental educational prototype. Its outputs are estimates based on the emission factors and calculation methods implemented in the project.

The results are not direct measurements of greenhouse gas emissions and have not been independently verified or certified. They should not be treated as official carbon accounting results, verified emission reductions, or carbon credits.

Actual agricultural emissions may vary depending on local conditions, farming practices, and other factors not represented in this prototype.

This project is intended for educational and demonstration purposes only.

## Project Background

Developed as a solo project for an inter-semester hackathon in September 2026, under the theme of Rural Development and Agriculture.
