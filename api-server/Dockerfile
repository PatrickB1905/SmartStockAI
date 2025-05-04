FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["node", "dist/main.js"]
