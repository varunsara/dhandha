export const databaseConfig = {
  url: process.env.DATABASE_URL || 'postgresql://username:password@localhost:5432/dhandha',
  maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS || '20'),
  connectionTimeoutMillis: parseInt(process.env.DB_TIMEOUT || '30000'),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
}