export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET || 'your-super-secret-key',
  url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  jwt: {
    secret: process.env.JWT_SECRET || 'your-jwt-secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  refresh: {
    secret: process.env.REFRESH_TOKEN_SECRET || 'your-refresh-secret',
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '30d',
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  },
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID || '',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
  },
  otp: {
    expiresIn: parseInt(process.env.OTP_EXPIRES_IN || '300'), // 5 minutes
    length: parseInt(process.env.OTP_LENGTH || '6'),
  },
}