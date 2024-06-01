
FROM node:latest AS build

WORKDIR /usr/local/app

COPY package*.json ./

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/lab2-users /usr/share/nginx/html

EXPOSE 80
