####################################
# Stage 1: build React app         #
####################################
FROM node:18.17.1-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy everything else, generate types, then build
COPY . .
# Build the optimized production bundle
RUN npm run build

####################################
# Stage 2: serve with nginx        #
####################################
FROM nginx:1.23.4-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
