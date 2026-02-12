# Use a lightweight Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Set environment variables
# IMPORTANT: use 'db' (service name) instead of 'localhost' if using Docker Compose
ENV DATABASE_URL="postgresql://postgres:mypassword@db:5432/postgres"

# Generate Prisma client (safe to do at build time)
RUN npx prisma generate

# Build your app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Run migrations at runtime, then start the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
