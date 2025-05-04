############################################
# Stage 1: Build Application Dependencies  #
############################################
FROM node:18.17.1-alpine AS build
WORKDIR /app

# Install dependencies explicitly as defined in package-lock.json
COPY package*.json ./
RUN npm ci

# Copy source code and compile TypeScript to JavaScript
COPY . .
RUN npm run build

############################################
# Stage 2: Prepare Production-Ready Image  #
############################################
FROM node:18.17.1-alpine AS runtime
WORKDIR /app

# Ensure environment is set to production for optimal performance
ENV NODE_ENV=production

# Bring in only the necessary artifacts: lockfile and compiled output
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm ci --omit=dev

# Expose application port and define container entrypoint
EXPOSE 3000
CMD ["node", "dist/main.js"]
