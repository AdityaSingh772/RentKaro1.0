# RentKaro

[![Deployment Status](https://img.shields.io/badge/Deployment-Live-brightgreen)](https://rent-karo.vercel.app)

Welcome to **RentKaro** – the ultimate marketplace app designed specifically for college campuses. With RentKaro, students can seamlessly rent, sell, and buy items within their campus community. Whether you need a textbook, a bike, or even a game console, RentKaro makes it easy and secure to find exactly what you're looking for.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

RentKaro revolutionizes the way students interact with each other in terms of renting, buying, and selling goods. Imagine a vibrant community where you can find affordable items right on your campus! RentKaro is more than just an app; it’s a thriving ecosystem fostering sustainability and convenience.

With an intuitive user interface and robust backend, RentKaro ensures that transactions are smooth and hassle-free. From high-demand gadgets to essential everyday items, RentKaro has got it all covered.

## Features

- **User Authentication**: Secure and seamless user registration and login with Auth0 by Okta.
- **Dynamic Listings**: Real-time posting, updating, and deleting of listings.
- **Admin Features**: There are various admin control features, which are not shown on the frontend for obvious reasons. Admin can control various things about the posts and feedback messages are also shown on the admin dashboard.
- **Advanced Search**: Powerful search functionality to find exactly what you need quickly.
- **User Profiles**: Detailed user profiles.
- **Demands**: Real-time postings for new demands of items, on demand page.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

RentKaro leverages a cutting-edge technology stack to deliver a robust and scalable application:

### Frontend

- **Next.js**: For Frontend and a seamless user experience.
- **Vercel**: Deployment platform for the frontend, ensuring high performance and reliability.

### Backend

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MongoDB**: A powerful, flexible, and scalable NoSQL database.
- **Railway**: Deployment platform for the backend, providing seamless integration and scalability.

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation Steps

1. Clone the repository
   ```sh
   git clone https://github.com/AdityaSingh772/RentKaro1.0
   ```
2. Navigate to the project directory
3. Install frontend dependencies
   ```sh
   npm install
   ```
4. Install backend dependencies
   ```sh
   cd backend
   npm install
   ```
5. Set up environment variables by creating a `.env` file in the root of the backend directory
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT = 5000
   ```

## Usage

To run the application locally:

### Frontend

1. Navigate to the frontend directory
2. Start the development server
   ```sh
   npm run dev
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory
   ```sh
   cd backend
   ```
2. Start the backend server
   ```sh
   npm start
   ```
   The backend will be running on [http://localhost:5000](http://localhost:5000).

## Deployment

The RentKaro app is deployed and live!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. 

## Contact

Aditya Singh - [workwithracian@gmail.com](mailto:workwithracian@gmail.com)

Thank you for visiting the RentKaro repository! We hope you enjoy using RentKaro as much as we enjoyed building it. If you have any questions or suggestions, feel free to reach out. Happy renting, buying, and selling!
