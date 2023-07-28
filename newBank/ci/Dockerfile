# Stage 1: Build stage
ARG AND_DOCKER_PROXY_REGISTRY
FROM $AND_DOCKER_PROXY_REGISTRY/node:16.14.2-alpine3.14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG NODE_ENV
COPY . .
RUN npm run build:$NODE_ENV


# Stage 2: Production stage
FROM $AND_DOCKER_PROXY_REGISTRY/nginx:1.21.6-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ci/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
