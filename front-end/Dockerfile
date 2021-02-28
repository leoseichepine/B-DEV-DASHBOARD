FROM node:15.1.0 as build
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install
COPY . .
RUN npm run build -o app

# multistage build...
# this runs a lil nginx instance to serve the app
FROM nginx:alpine as dev
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf