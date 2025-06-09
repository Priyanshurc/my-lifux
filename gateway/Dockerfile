# gateway/Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose your backend port (example: 5000)
EXPOSE 5000

# Start your backend
CMD ["node", "index.js"]
