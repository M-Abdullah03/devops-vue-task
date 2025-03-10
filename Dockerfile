# Use Node.js as the base image
FROM node:20 as build

# Set working directory
WORKDIR /app
# Define build arguments
ARG VITE_APP_DEV_PORT
ARG VITE_APP_VERSION
ARG VITE_APP_TITLE

# Set environment variables from build arguments
ENV VITE_APP_DEV_PORT=$VITE_APP_DEV_PORT
ENV VITE_APP_VERSION=$VITE_APP_VERSION
ENV VITE_APP_TITLE=$VITE_APP_TITLE


# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]