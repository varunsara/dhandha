export const validateEnv = () => {
  const requiredVars = [
    'DATABASE_URL',
    'NEXTAUTH_SECRET',
    'JWT_SECRET',
  ]

  const missingVars = requiredVars.filter(varName => !process.env[varName])

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
  }
}

export const isDevelopment = () => process.env.NODE_ENV === 'development'
export const isProduction = () => process.env.NODE_ENV === 'production'
export const isTest = () => process.env.NODE_ENV === 'test'