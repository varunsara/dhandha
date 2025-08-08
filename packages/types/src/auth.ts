export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  phone?: string
  role: 'CONSUMER' | 'AGENT'
}

export interface AuthResponse {
  user: {
    id: string
    email: string
    name: string
    role: string
    isVerified: boolean
  }
  accessToken: string
  refreshToken: string
}

export interface OTPVerification {
  phone: string
  otp: string
}

export interface PasswordReset {
  email: string
  token: string
  newPassword: string
}