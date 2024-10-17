# Stage 1: Build the React app
FROM node:18 as build

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the built app using 'serve'
FROM node:18

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build files from the previous stage
COPY --from=build /app/build /app

# Expose port 3000 to serve the app
EXPOSE 2031

# Start the app with 'serve'
CMD ["serve", "-s", ".", "-l", "2031"]
