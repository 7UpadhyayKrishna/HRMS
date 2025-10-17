# Enterprise HRMS Features Documentation

## 🎯 Overview

This document outlines all enterprise-level features implemented in the HRMS application.

---

## 📋 Table of Contents

1. [Employee Information Module](#1-employee-information-module)
2. [Client & Project Mapping](#2-client--project-mapping)
3. [Attendance & Timesheets](#3-attendance--timesheets)
4. [Compliance & Document Management](#4-compliance--document-management)
5. [Recruitment & Onboarding](#5-recruitment--onboarding)
6. [Performance & Exit Management](#6-performance--exit-management)
7. [Reports & Dashboards](#7-reports--dashboards)
8. [Notifications System](#8-notifications-system)
9. [File Storage](#9-file-storage)
10. [API Endpoints](#10-api-endpoints)

---

## 1. Employee Information Module

### Features
- **Master Data Management:**
  - Personal details (name, DOB, gender, blood group, marital status)
  - Contact details (email, phone, alternate phone, address)
  - ID details (Aadhaar, PAN, passport, driving license)
  - Bank details (account number, IFSC, bank name, branch)
  - Education details (degree, specialization, institution, passing year)
  - Experience details (company, designation, duration, responsibilities)

- **Document Management:**
  - Upload and store employee documents
  - Track document expiry dates
  - Automatic alerts for expiring documents
  - Document verification workflow

### API Endpoints
```
GET    /api/employees
POST   /api/employees
GET    /api/employees/:id
PUT    /api/employees/:id
DELETE /api/employees/:id
GET    /api/employees/stats
```

---

## 2. Client & Project Mapping

### Features
- **Client Management:**
  - Client master data
  - Contract details and tracking
  - Billing type configuration (per-day, per-month, FTE, fixed)
  - Contract expiry alerts

- **Project Management:**
  - Map employees to projects
  - Track project timelines
  - Assign roles and billing rates
  - Project-wise employee deployment
  - Client-wise deployment summary

### API Endpoints
```
# Clients
GET    /api/clients
POST   /api/clients
GET    /api/clients/:id
PUT    /api/clients/:id
DELETE /api/clients/:id
GET    /api/clients/deployment-summary

# Projects
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id
POST   /api/projects/:id/assign
POST   /api/projects/:id/remove
```

---

## 3. Attendance & Timesheets

### Features
- **Attendance Modes:**
  - Manual entry by HR
  - Biometric integration (API-ready)
  - Mobile check-in with GPS

- **Timesheet Management:**
  - Project-wise time tracking
  - Weekly timesheet submission
  - Approval workflow
  - Billable vs non-billable hours
  - Client invoicing reports

### API Endpoints
```
# Attendance
GET    /api/attendance
POST   /api/attendance
GET    /api/attendance/:id
PUT    /api/attendance/:id
DELETE /api/attendance/:id
GET    /api/attendance/stats

# Timesheets
GET    /api/timesheets
POST   /api/timesheets
GET    /api/timesheets/:id
PUT    /api/timesheets/:id
PUT    /api/timesheets/:id/submit
PUT    /api/timesheets/:id/approve
PUT    /api/timesheets/:id/reject
DELETE /api/timesheets/:id
```

---

## 4. Compliance & Document Management

### Features
- **Document Tracking:**
  - Multiple document types support
  - Expiry date tracking
  - Automatic alerts (configurable days before expiry)
  - Document verification workflow
  - S3-compatible storage

- **Compliance Management:**
  - Track compliance requirements
  - Client-specific compliance
  - Due date alerts
  - Completion tracking
  - Compliance dashboard

### API Endpoints
```
# Documents
GET    /api/documents
POST   /api/documents
GET    /api/documents/:id
DELETE /api/documents/:id
PUT    /api/documents/:id/verify
PUT    /api/documents/:id/reject
GET    /api/documents/expiring

# Compliance
GET    /api/compliance
POST   /api/compliance
GET    /api/compliance/:id
PUT    /api/compliance/:id
DELETE /api/compliance/:id
PUT    /api/compliance/:id/complete
GET    /api/compliance/due
```

---

## 5. Recruitment & Onboarding

### Features
- **Candidate Management:**
  - Applicant database
  - Source tracking (LinkedIn, referral, job portal, etc.)
  - Candidate stages: Applied → Shortlisted → Interview → Offer → Joined
  - Interview scheduling
  - Offer management
  - Convert candidate to employee

- **Onboarding:**
  - Multi-stage onboarding process
  - Document submission checklist
  - Task assignment
  - Induction status tracking
  - Automatic employee record creation

### API Endpoints
```
# Candidates
GET    /api/candidates
POST   /api/candidates
GET    /api/candidates/:id
PUT    /api/candidates/:id
DELETE /api/candidates/:id
PUT    /api/candidates/:id/stage
POST   /api/candidates/:id/interview
POST   /api/candidates/:id/convert

# Onboarding
GET    /api/onboarding
POST   /api/onboarding
GET    /api/onboarding/:id
PUT    /api/onboarding/:id
DELETE /api/onboarding/:id
POST   /api/onboarding/:id/advance
POST   /api/onboarding/:id/joining
POST   /api/onboarding/:id/tasks
```

---

## 6. Performance & Exit Management

### Features
- **Performance Feedback:**
  - Mid-project reviews
  - End-of-project feedback
  - Client feedback
  - Manager feedback
  - Self-assessment
  - Rating system (1-5 scale)

- **Exit Management:**
  - Exit process initiation
  - Multi-department clearance (HR, IT, Finance, Admin)
  - Exit interview scheduling
  - Asset return tracking
  - Final settlement processing
  - Document generation (relieving letter, experience letter)

### API Endpoints
```
# Feedback
GET    /api/feedback
POST   /api/feedback
GET    /api/feedback/:id
PUT    /api/feedback/:id
PUT    /api/feedback/:id/submit
PUT    /api/feedback/:id/acknowledge
DELETE /api/feedback/:id

# Exit Process
GET    /api/exit-process
POST   /api/exit-process
GET    /api/exit-process/:id
DELETE /api/exit-process/:id
POST   /api/exit-process/:id/clearance
POST   /api/exit-process/:id/exit-interview/schedule
POST   /api/exit-process/:id/exit-interview/complete
POST   /api/exit-process/:id/settlement
```

---

## 7. Reports & Dashboards

### Features
- **Excel Reports:**
  - Employee reports
  - Attendance reports
  - Timesheet reports
  - Payroll reports
  - Compliance reports
  - Branded exports with company logo

- **Dashboard KPIs:**
  - Total employees
  - Active projects
  - Upcoming contract expirations
  - Pending leave requests
  - Compliance status
  - Client-wise deployment
  - Region-wise distribution

### API Endpoints
```
GET    /api/reports/export/employees
GET    /api/reports/export/attendance
GET    /api/reports/export/timesheets
GET    /api/reports/export/payroll
GET    /api/reports/compliance
GET    /api/dashboard/stats
GET    /api/clients/deployment-summary
```

---

## 8. Notifications System

### Features
- **Centralized Notifications:**
  - Document expiry alerts
  - Contract expiry alerts
  - Compliance due alerts
  - Leave request notifications
  - Timesheet approval notifications
  - Project assignment notifications
  - Exit clearance notifications

- **Notification Management:**
  - Mark as read/unread
  - Priority levels (low, medium, high, urgent)
  - Action URLs
  - Email notifications (configurable)

### API Endpoints
```
GET    /api/notifications
PUT    /api/notifications/mark-all-read
PUT    /api/notifications/:id/read
DELETE /api/notifications/:id
```

---

## 9. File Storage

### Features
- **S3-Compatible Storage:**
  - AWS S3 integration
  - MinIO support (local alternative)
  - Secure file uploads
  - Private file access with signed URLs
  - File type validation
  - Size limits
  - Automatic file organization by type

### Configuration
```env
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=hrms-documents
MAX_FILE_SIZE=5242880
```

---

## 10. API Endpoints Summary

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin, HR, Employee, Client)
- Token expiration and refresh

### Roles & Permissions
- **Admin:** Full system access
- **HR:** Employee management, recruitment, compliance
- **Employee:** Self-service portal, timesheets, leave
- **Client:** View deployed employees, approve timesheets, feedback

---

## 🔒 Security Features

1. **Authentication:**
   - JWT tokens with expiration
   - Password hashing with bcrypt
   - Secure password reset

2. **Authorization:**
   - Role-based access control
   - Route-level permissions
   - Resource-level permissions

3. **Data Protection:**
   - Encrypted sensitive data
   - Secure file storage
   - Private S3 buckets
   - Signed URLs for file access

4. **API Security:**
   - CORS configuration
   - Rate limiting (recommended)
   - Input validation
   - SQL injection prevention
   - XSS protection

---

## 📊 Database Models

### Core Models
- User
- Employee
- Department
- Client
- Project
- Timesheet
- Document
- Compliance
- Candidate
- Feedback
- ExitProcess
- Notification
- Leave
- Attendance
- Payroll
- Asset
- JobPosting
- Onboarding
- Offboarding

### Relationships
- Employee → Department (Many-to-One)
- Employee → Project (Many-to-Many through Project.teamMembers)
- Project → Client (Many-to-One)
- Timesheet → Employee, Project, Client (Many-to-One)
- Document → Employee (Many-to-One)
- Compliance → Employee, Client (Many-to-One)

---

## 🚀 Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Manual Deployment
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run build
```

### Environment Variables
See `.env.example` files in backend and frontend directories.

---

## 📝 License

MIT License

---

## 👥 Support

For issues or questions, please refer to the main README.md or create an issue in the repository.
