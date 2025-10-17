# 🚀 HRMS Quick Start Guide

## Prerequisites
- Node.js v16+
- MongoDB v5+
- npm or yarn

## Installation

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hrms
JWT_SECRET=hrms-secret-key-2024
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
MAX_FILE_SIZE=5242880

# Optional: AWS S3 (for file storage)
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=hrms-documents
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000
```

## Running the Application

### Option 1: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Option 2: Docker
```bash
docker-compose up -d
```

## Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/health

## Default Login (Create First)

Use the registration endpoint to create an admin user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@hrms.com",
    "password": "admin123",
    "role": "admin"
  }'
```

Then login with:
- **Email:** admin@hrms.com
- **Password:** admin123

## Module Overview

### ✅ Core Modules
1. **Dashboard** - Analytics and KPIs
2. **Employee Management** - CRUD operations
3. **Leave Management** - Apply and approve
4. **Attendance** - Track daily attendance
5. **Payroll** - Salary management

### ✅ Enterprise Modules
6. **Clients & Projects** - Client management and project mapping
7. **Timesheets** - Project-wise time tracking
8. **Compliance** - Document and compliance tracking
9. **Recruitment** - Candidate pipeline management
10. **Performance** - Feedback and exit process
11. **Reports** - Excel exports and compliance reports

## API Testing

Use Postman or curl to test APIs:

```bash
# Get all employees
curl http://localhost:5000/api/employees \
  -H "Authorization: Bearer YOUR_TOKEN"

# Get dashboard stats
curl http://localhost:5000/api/dashboard/stats \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Troubleshooting

### MongoDB Connection Error
```bash
# Start MongoDB
mongod --dbpath /path/to/data
```

### Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 5173
npx kill-port 5173
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Create admin user
2. ✅ Add departments
3. ✅ Add employees
4. ✅ Configure clients and projects
5. ✅ Set up compliance requirements
6. ✅ Start using the system!

## Documentation

- **Features:** See `ENTERPRISE_FEATURES.md`
- **Implementation:** See `IMPLEMENTATION_SUMMARY.md`
- **Setup:** See `SETUP.md`
- **API Docs:** See `ENTERPRISE_FEATURES.md` (API Endpoints section)

## Support

For issues or questions, refer to the documentation files or create an issue in the repository.

---

**Happy HR Management! 🎉**
