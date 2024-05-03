#Stage 1
FROM node:20.9.0-bookworm-slim as builder
RUN npm cache clean --force
WORKDIR /src/app
COPY /assistant_frontend/package*.json ./
RUN rm -rf node_modules
RUN npm install
COPY /assistant_frontend/ .
RUN npm run build

# Development
FROM builder as dev
EXPOSE 3000


CMD ["npm", "run", "dev"]
