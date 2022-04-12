FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN apk add --no-cache --virtual .gyp python3 make g++ && npm install && apk del .gyp
CMD ["npm", "run", "start"]