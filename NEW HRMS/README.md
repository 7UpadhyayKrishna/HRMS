# HRMS - Human Resource Management System

A comprehensive full-stack HRMS application built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Dashboard:** Quick stats and analytics
- **Job Desk:** Manage job roles and positions
- **Employee Management:** Complete employee lifecycle management
- **Leave Management:** Apply, approve, and track leaves
- **Attendance:** Daily attendance tracking with filters
- **Payroll:** Salary management, deductions, and reports
- **Administration:** Departments, roles, and policies
- **Assets:** Track company assets
- **Onboarding:** Streamlined new hire onboarding process
- **Offboarding:** Exit management and clearance
- **Settings:** User profile and system configuration

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- TailwindCSS
- Axios
- Lucide React (Icons)
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing

## 📁 Project Structure

```
/hrms-app
├── backend/          # Node.js backend
│   ├── src/
│   │   ├── config/   # Database and environment config
│   │   ├── controllers/  # Business logic
│   │   ├── middlewares/  # Auth and error handling
│   │   ├── models/   # Mongoose schemas
│   │   ├── routes/   # Express routes
│   │   ├── utils/    # Helper functions
│   │   └── app.js    # Express app setup
│   └── package.json
│
├── frontend/         # React frontend
│   ├── src/
│   │   ├── api/      # API services
│   │   ├── components/  # Reusable components
│   │   ├── context/  # Global state
│   │   ├── hooks/    # Custom hooks
│   │   ├── layouts/  # Layout components
│   │   ├── pages/    # Page components
│   │   ├── routes/   # Router configuration
│   │   └── styles/   # Global styles
│   └── package.json
│
└── docker-compose.yml
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd NEW\ HRMS
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Using Docker

```bash
docker-compose up -d
```

## 🔐 Authentication

The system uses JWT-based authentication with three roles:
- **Admin:** Full system access
- **HR:** Employee and HR operations
- **Employee:** Self-service portal

## 📝 API Documentation

API endpoints are organized by feature:
- `/api/auth` - Authentication
- `/api/employees` - Employee management
- `/api/leave` - Leave management
- `/api/attendance` - Attendance tracking
- `/api/payroll` - Payroll operations
- `/api/assets` - Asset management
- `/api/onboarding` - Onboarding process
- `/api/offboarding` - Offboarding process

## 🎨 Design

The application features a modern dark theme with:
- Professional sidebar navigation
- Responsive design
- Blue accent colors for active states
- Clean typography (Inter font)

## 📄 License

MIT License

## 👥 Contributing

Contributions are welcome! Please read the contributing guidelines first.
