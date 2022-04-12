FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN apk add --no-cache --virtual .gyp python3 make g++ && npm install && apk del .gyp && npm rebuild node-sass
CMD ["npm", "run", "start"]