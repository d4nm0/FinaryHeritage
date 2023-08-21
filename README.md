Welcome to Patrimoine Visualizer! This project aims to provide a way to visualize your financial portfolio data from the Finary website and use it for your own purposes. The project utilizes the Selenium web automation tool to scrape data from the Finary site securely. It's important to note that this project is designed to be hosted locally or on a server of your choice. Rest assured, no passwords are stored or communicated in the process.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Running the Scraper
Accessing the Visualizer
Security
Contributing
License
Getting Started
Prerequisites
To set up and run this project, you'll need the following tools and technologies:

Node.js (Recommended version: 14.x or higher)
npm (Node Package Manager)
Ensure you have these prerequisites installed before proceeding.

Installation
Clone this repository to your local machine using:
git clone https://github.com/d4nm0/FinaryHeritage.git
Navigate to the project directory:
cd FinaryHeritage
Install project dependencies using npm:
npm install

Usage
Running the Scraper
Start the local HTTP server:
http-server
Open a new terminal window and start the data scraper:
node getdata.js
The scraper will prompt you to enter your Finary login credentials (email and password). Please note that your credentials are only used for accessing your data and are not stored or communicated elsewhere.

Accessing the Visualizer
After starting the scraper, the HTTP server will display a URL in the terminal. Open a web browser and navigate to this URL.

You will be presented with a visual representation of your financial portfolio data retrieved from the Finary website.

Security
We take security seriously. This project is designed to run locally or on a server under your control. Your login credentials are only used temporarily to access your data and are not stored, shared, or transmitted outside of the local environment. You are encouraged to review the code to ensure your data's security.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub Fork & Pull Request workflow. Please review the Contributing Guidelines for more information.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code as long as you adhere to the terms of the license.

Thank you for choosing Patrimoine Visualizer! If you have any questions, concerns, or feedback, please don't hesitate to contact us or open an issue on GitHub. Happy visualizing!
