# Gift_Shopping_App

Welcome to the Gift Shopping App project! This repository contains a simple web application for an online gift shop where users can browse and purchase various gift items.

 Project Structure

The project is structured into two main directories:

- backend/: Contains the server-side code using Node.js and Express to serve the frontend files.
  - `app.js`: Entry point of the backend server.
  - `package.json`, `package-lock.json`: Node.js package configuration files.

- frontend/: Contains the frontend HTML, CSS, and JavaScript files.
  - `index.html`: Main HTML file for the website.
  - `styles.css`: CSS file for styling the website.
  - `script.js`: JavaScript file for dynamic functionality of the website.
  - Gift_images/: Folder containing images of different gift items categorized into subfolders (Bouquet, Chocolate, Teddy).

 Getting Started

To run the project locally, follow these steps:

 Prerequisites

- Node.js installed on your machine.

 Installation

1. Clone the repository:

   ```bash
   cd Gift_Shopping_App
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Start the backend server:

   ```bash
   node app.js
   ```

4. Open a new terminal window and navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

5. Start a simple HTTP server to serve the frontend files. You can use Python or any other HTTP server you prefer:

   - Using Python 3:

     ```bash
     python -m http.server
     ```

     or

     ```bash
     python3 -m http.server
     ```

   - Using Python 2:

     ```bash
     python -m SimpleHTTPServer
     ```

6. Open your web browser and go to `http://localhost:8000` (or the port specified by your HTTP server).

 Usage

- Browse through different gift items displayed on the website.
- Click on "Add to Cart" buttons to add items to your shopping cart.
- View and manage items in your shopping cart from the sidebar.
- Click "Clear Cart" to remove all items from the cart.

 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to submit an issue or pull request.

 License

This project is licensed under the [MIT License](LICENSE).
