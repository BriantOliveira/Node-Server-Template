FROM node:lts-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash coreutils

WORKDIR /usr/src/paysplit-backend

COPY package.json ./

RUN npm i --quiet --production

COPY . .

RUN chmod +x scripts/wait-for-it.sh

CMD [ "npm", "start" ]