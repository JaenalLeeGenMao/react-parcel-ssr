FROM node:8-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache --virtual deps \
  util-linux \
  python \
  build-base \
  && yarn

COPY . .

# Consume required ENVs
ARG REACT_APP_ENV
ARG NODE_ENV
ARG CDN_PATH

RUN yarn build

RUN apk del deps \
  && rm -rf /var/cache/apk/*

ENTRYPOINT ["node"]

CMD ["dist/server"]
