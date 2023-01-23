FROM node:alpine

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN yarn install --only=production

COPY . .

RUN yarn build

CMD yarn start