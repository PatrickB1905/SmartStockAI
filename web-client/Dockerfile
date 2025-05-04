############################################
# Stage 1: Build React Frontend            #
############################################
FROM node:18.17.1-alpine AS builder
WORKDIR /app

# Install dependencies exactly as defined in package-lock.json
COPY package*.json ./
RUN npm ci

# Copy source and generate optimized production build
COPY . .
RUN npm run build

############################################
# Stage 2: Serve via Nginx                 #
############################################
FROM nginx:1.23.4-alpine

# Remove default configuration to apply custom settings
RUN rm /etc/nginx/conf.d/default.conf

# Inject our tailored proxy and routing rules
COPY nginx.conf /etc/nginx/conf.d

# Deploy compiled assets
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port and launch Nginx in foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
