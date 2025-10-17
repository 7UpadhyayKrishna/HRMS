# HRMS Setup Guide

## Prerequisites

- Node.js v16+ installed
- MongoDB v5+ installed and running
- npm or yarn package manager

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (already created, but verify settings):
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/hrms
JWT_SECRET=hrms-secret-key-2024-change-in-production
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
MAX_FILE_SIZE=5242880
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Verify `.env` file:
```
VITE_API_URL=http://localhost:5000
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Initial Setup

### Create Admin User

You can create an admin user by making a POST request to `/api/auth/register`:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@hrms.com",
    "password": "admin123",
    "role": "admin"
  }'
```

### Create Sample Departments

```bash
curl -X POST http://localhost:5000/api/departments \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Engineering",
    "code": "ENG",
    "description": "Engineering Department"
  }'
```

## Docker Setup (Alternative)

If you prefer using Docker:

```bash
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend on port 5000
- Frontend on port 5173

## Default Login Credentials

After setting up, you can use these credentials:

- **Admin:** admin@hrms.com / admin123
- **HR:** hr@hrms.com / hr123
- **Employee:** employee@hrms.com / emp123

(Note: You need to create these users first using the registration endpoint)

## Troubleshooting

### MongoDB Connection Issues

If you see MongoDB connection errors:
1. Ensure MongoDB is running: `mongod --version`
2. Check if MongoDB service is active
3. Verify the connection string in `.env`

### Port Already in Use

If ports 5000 or 5173 are already in use:
1. Change the PORT in backend `.env`
2. Update VITE_API_URL in frontend `.env`
3. Update CORS_ORIGIN in backend `.env`

### Module Not Found Errors

Run `npm install` again in the respective directory (backend or frontend)

## Production Deployment

For production deployment:

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Set NODE_ENV to production in backend `.env`

3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start backend/src/app.js --name hrms-backend
```

4. Use a reverse proxy like Nginx for the frontend build

5. Use a production MongoDB instance (MongoDB Atlas recommended)

## Features Implemented

✅ Authentication & Authorization (JWT-based)
✅ Dashboard with statistics
✅ Employee Management (CRUD)
✅ Leave Management
✅ Attendance Tracking
✅ Payroll Management
✅ Asset Management
✅ Job Desk
✅ Onboarding Process
✅ Offboarding Process
✅ Department Management
✅ Role-based Access Control
✅ Dark Theme UI
✅ Responsive Design

## API Documentation

API endpoints are available at:
- Auth: `/api/auth/*`
- Employees: `/api/employees/*`
- Leave: `/api/leave/*`
- Attendance: `/api/attendance/*`
- Payroll: `/api/payroll/*`
- Assets: `/api/assets/*`
- Jobs: `/api/jobs/*`
- Onboarding: `/api/onboarding/*`
- Offboarding: `/api/offboarding/*`
- Dashboard: `/api/dashboard/*`
- Departments: `/api/departments/*`

## Support

For issues or questions, please refer to the README.md file or create an issue in the repository.
