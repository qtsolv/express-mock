# syntax=docker/dockerfile:1

FROM node:lts-alpine

ARG emulated_delay=0
ENV EMULATED_DELAY=$emulated_delay

WORKDIR /app

COPY . .
RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]
