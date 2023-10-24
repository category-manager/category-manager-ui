FROM node:18.18.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/category-manager-ui/ /usr/share/nginx/html
EXPOSE 80