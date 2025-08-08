# API Documentation

## Overview
This document provides comprehensive documentation for the Dhandha API.

## Base URL
```
Development: http://localhost:3001/api
Production: https://api.dhandha.com/api
```

## Authentication
The API uses JWT-based authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### Authentication Endpoints

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+919876543210",
  "role": "CONSUMER"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clxy123456",
      "email": "john@example.com",
      "name": "John Doe",
      "role": "CONSUMER",
      "isVerified": false
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST /auth/login
Authenticate user and get access token.

#### POST /auth/logout
Logout user and invalidate tokens.

#### POST /auth/refresh
Refresh access token using refresh token.

#### POST /auth/forgot-password
Request password reset.

#### POST /auth/reset-password
Reset password using token.

#### POST /auth/verify-otp
Verify OTP for phone number verification.

### User Endpoints

#### GET /users/profile
Get current user profile.

#### PUT /users/profile
Update user profile.

#### POST /users/upload-avatar
Upload user avatar image.

### Property Endpoints

#### GET /properties
Get list of properties with filtering and pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search term
- `type` (string): Property type (LAND, PLOT, VILLA, etc.)
- `minPrice` (number): Minimum price
- `maxPrice` (number): Maximum price
- `city` (string): City name
- `state` (string): State name

#### GET /properties/:id
Get property details by ID.

#### POST /properties
Create new property listing.

#### PUT /properties/:id
Update property listing.

#### DELETE /properties/:id
Delete property listing.

#### POST /properties/:id/inquire
Submit inquiry for a property.

#### GET /properties/:id/inquiries
Get inquiries for a property (property owner/agent only).

### Search Endpoints

#### GET /search/properties
Advanced property search with filters.

#### GET /search/locations
Search for locations (cities, areas).

#### GET /search/suggestions
Get search suggestions.

## Error Handling

The API uses conventional HTTP response codes:

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

**Error Response Format:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed error messages"]
}
```

## Rate Limiting
API requests are limited to 100 requests per 15-minute window per IP address.

## Pagination
List endpoints support pagination with the following parameters:
- `page`: Page number (starts from 1)
- `limit`: Number of items per page (max 100)

**Pagination Response:**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## File Upload
File uploads are supported for:
- User avatars (max 5MB, JPG/PNG)
- Property images (max 10MB each, JPG/PNG/WebP)
- Property documents (max 10MB, PDF/DOC/DOCX)

**Upload Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://storage.example.com/uploads/file.jpg",
    "filename": "file.jpg",
    "size": 1024000
  }
}
```

## Webhooks
The API supports webhooks for real-time notifications:

- Property status changes
- New inquiries
- Payment confirmations
- Verification updates

## SDK and Client Libraries
- JavaScript/TypeScript SDK (coming soon)
- Python SDK (coming soon)
- React hooks library (coming soon)

## Support
For API support and questions:
- Email: api-support@dhandha.com
- Documentation: https://docs.dhandha.com
- Status Page: https://status.dhandha.com