FROM node:15.1.0 as dev
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]