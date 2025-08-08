// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Indian mobile number validation
export const isValidIndianMobile = (mobile: string): boolean => {
  const mobileRegex = /^[6-9]\d{9}$/
  return mobileRegex.test(mobile.replace(/\D/g, ''))
}

// Pin code validation
export const isValidPinCode = (pinCode: string): boolean => {
  const pinCodeRegex = /^[1-9][0-9]{5}$/
  return pinCodeRegex.test(pinCode)
}

// Password strength validation
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Validate CUID format
export const isValidCuid = (id: string): boolean => {
  const cuidRegex = /^c[a-z0-9]{24}$/
  return cuidRegex.test(id)
}