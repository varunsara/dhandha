-- Initialize database for development
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create additional development users if needed
-- CREATE USER dhandha_dev WITH PASSWORD 'dev_password';
-- GRANT ALL PRIVILEGES ON DATABASE dhandha TO dhandha_dev;