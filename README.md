# IEEE TEMS Website

A modern web application for the IEEE Technology & Engineering Management Society (TEMS) chapter at SRM Institute of Science and Technology.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Event management and display
- Team member showcase
- Contact form with validation
- Image upload and management
- Robust error handling

## Tech Stack

### Frontend
- React 19 with Vite
- React Router for navigation
- TanStack Query for data fetching
- Framer Motion for animations
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- Mongoose for object modeling
- Multer for file uploads
- CORS for cross-origin requests

## Project Structure

```
├── backend/                # Backend server code
│   ├── config/             # Configuration files
│   ├── models/             # Database models
│   └── server.js           # Express server
│
└── frontend/               # Frontend React application
    ├── public/             # Static files
    └── src/                # Source code
        ├── assets/         # Images, fonts, etc.
        ├── components/     # Reusable components
        ├── context/        # React context providers
        ├── hooks/          # Custom React hooks
        ├── layouts/        # Layout components
        ├── pages/          # Page components
        ├── services/       # API services
        └── utils/          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ieee-tems.git
   cd ieee-tems
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

### Running the Application

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. In a separate terminal, start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Backend

1. Build the backend:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting service (Heroku, Vercel, etc.)

### Frontend

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your preferred hosting service

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- IEEE TEMS for their support
- SRM Institute of Science and Technology
- All contributors to this project 