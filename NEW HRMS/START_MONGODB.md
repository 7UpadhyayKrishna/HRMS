# MongoDB Setup Instructions

## Current Issue
The backend server cannot connect to MongoDB because MongoDB is not running.

## Solutions

### Option 1: Start MongoDB Service (If already installed)
```bash
# Windows Command Prompt (Run as Administrator)
net start MongoDB
```

### Option 2: Start Docker Desktop + MongoDB
```bash
# 1. Open Docker Desktop application
# 2. Wait for it to fully start
# 3. Then run:
docker-compose up -d

# This will start MongoDB, Backend, and Frontend together
```

### Option 3: Install MongoDB (If not installed)

1. Download MongoDB Community Server:
   https://www.mongodb.com/try/download/community

2. Install with default settings

3. MongoDB will start automatically as a Windows service

4. Verify installation:
```bash
mongod --version
```

### Option 4: Use MongoDB Atlas (Cloud - Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Get connection string
5. Update backend/.env:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hrms
```

## After MongoDB is Running

### Start Backend:
```bash
cd backend
npm run dev
```

### Start Frontend:
```bash
cd frontend
npm run dev
```

## Verify MongoDB is Running

```bash
# Check if MongoDB service is running
sc query MongoDB

# Or connect to MongoDB shell
mongosh
```

## Default MongoDB Connection
- Host: localhost
- Port: 27017
- Database: hrms (will be created automatically)

---

**Choose the option that works best for your setup!**
