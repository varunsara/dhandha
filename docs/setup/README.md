# Setup Guide

## Prerequisites

Before setting up Dhandha locally, ensure you have the following installed:

- **Node.js** 18+ and **npm** 8+
- **PostgreSQL** 14+
- **Git**
- **Docker** and **Docker Compose** (optional, for containerized development)

## Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/varunsara/dhandha.git
cd dhandha
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the environment example file and configure your settings:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dhandha"

# Authentication
NEXTAUTH_SECRET="your-super-secret-key-for-nextauth"
JWT_SECRET="your-jwt-secret-key"

# Add other required environment variables...
```

### 4. Database Setup

#### Option A: Using Docker (Recommended)

```bash
# Start PostgreSQL with Docker Compose
docker-compose up -d postgres

# Wait for PostgreSQL to be ready, then run:
npm run db:generate
npm run db:push
```

#### Option B: Local PostgreSQL

1. Create a new database:
```sql
CREATE DATABASE dhandha;
```

2. Update `DATABASE_URL` in `.env.local`

3. Generate Prisma client and push schema:
```bash
npm run db:generate
npm run db:push
```

### 5. Start Development Servers

```bash
npm run dev
```

This will start:
- Next.js frontend at http://localhost:3000
- NestJS API at http://localhost:3001
- Prisma Studio at http://localhost:5555 (if using Docker)

## Detailed Setup

### Development with Docker

For a fully containerized development environment:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Services included:
- PostgreSQL (port 5432)
- Redis (port 6379)
- Prisma Studio (port 5555)
- MailHog (ports 1025, 8025)

### Manual Database Setup

1. **Install PostgreSQL** locally or use a cloud provider

2. **Create database and user:**
```sql
CREATE DATABASE dhandha;
CREATE USER dhandha_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE dhandha TO dhandha_user;
```

3. **Update environment variables:**
```env
DATABASE_URL="postgresql://dhandha_user:your_password@localhost:5432/dhandha"
```

4. **Run migrations:**
```bash
npm run db:generate
npm run db:migrate
```

### Third-Party Service Configuration

#### Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API and Places API
3. Create an API key
4. Add to `.env.local`:
```env
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
```

#### Razorpay (Payment Gateway)
1. Sign up at [Razorpay](https://razorpay.com/)
2. Get API keys from dashboard
3. Add to `.env.local`:
```env
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
```

#### Twilio (SMS/OTP)
1. Sign up at [Twilio](https://www.twilio.com/)
2. Get account SID and auth token
3. Add to `.env.local`:
```env
TWILIO_ACCOUNT_SID="your-twilio-account-sid"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
TWILIO_PHONE_NUMBER="your-twilio-phone-number"
```

#### OAuth Providers

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add authorized origins and redirect URIs
4. Add to `.env.local`:
```env
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

**Facebook OAuth:**
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create an app and get app ID and secret
3. Add to `.env.local`:
```env
FACEBOOK_CLIENT_ID="your-facebook-client-id"
FACEBOOK_CLIENT_SECRET="your-facebook-client-secret"
```

## Development Workflow

### Running Individual Applications

```bash
# Frontend only
cd apps/web && npm run dev

# Backend only
cd apps/api && npm run dev

# Build specific package
cd packages/ui && npm run build
```

### Database Operations

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and run migrations
npm run db:migrate

# Reset database
npm run db:reset

# Open Prisma Studio
npm run db:studio

# Seed database with sample data
npm run db:seed
```

### Code Quality

```bash
# Lint all packages
npm run lint

# Format code
npm run format

# Type check
npm run type-check

# Run tests
npm run test
```

## Troubleshooting

### Common Issues

**1. Port already in use**
```bash
# Kill process using port 3000
npx kill-port 3000

# Or change port in package.json
```

**2. Database connection failed**
- Check if PostgreSQL is running
- Verify DATABASE_URL in .env.local
- Ensure database exists

**3. Prisma client not generated**
```bash
npm run db:generate
```

**4. Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**5. Build failures**
```bash
# Clean build cache
npm run clean
npm run build
```

### Getting Help

- Check [API Documentation](../api/README.md)
- Review [Architecture docs](../architecture/README.md)
- Create an issue on GitHub
- Join our community discussions

## Next Steps

After setup:
1. Explore the codebase structure
2. Read the [Contributing Guide](../contributing/README.md)
3. Check out [Architecture Documentation](../architecture/README.md)
4. Start with simple features or bug fixes