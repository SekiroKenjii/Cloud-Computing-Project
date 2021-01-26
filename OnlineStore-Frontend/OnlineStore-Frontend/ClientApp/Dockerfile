### STAGE 2: Build ###
FROM node:14.15.0 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19.6-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/ClientApp /usr/share/nginx/html

EXPOSE 4200
