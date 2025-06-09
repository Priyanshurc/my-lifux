# Dockerfile (for Vite React)
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build frontend
RUN npm run build

# Serve the build using a lightweight web server
RUN npm install -g serve
EXPOSE 4173

CMD ["serve", "-s", "dist"]
