export interface User {
  id: string
  email: string
  name: string
  phone?: string
  role: UserRole
  isVerified: boolean
  profile?: UserProfile
  createdAt: Date
  updatedAt: Date
}

export enum UserRole {
  CONSUMER = 'CONSUMER',
  AGENT = 'AGENT',
  ADMIN = 'ADMIN'
}

export interface UserProfile {
  id: string
  userId: string
  avatar?: string
  bio?: string
  address?: Address
  preferences?: UserPreferences
  verificationStatus: VerificationStatus
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  street: string
  city: string
  state: string
  pinCode: string
  country: string
  latitude?: number
  longitude?: number
}

export interface UserPreferences {
  language: string
  currency: string
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
}

export interface VerificationStatus {
  identity: boolean
  phone: boolean
  email: boolean
  professional?: boolean
  documents?: boolean
}