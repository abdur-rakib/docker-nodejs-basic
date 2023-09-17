FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn


COPY . .

ENV port=8080

EXPOSE 8080

CMD [ "yarn", "dev" ]