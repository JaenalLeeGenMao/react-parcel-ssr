FROM node:8-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache --virtual deps \
  python \
  build-base \
  && yarn \
  && apk del deps \
  && rm -rf /var/cache/apk/*

COPY . .

# Consume required ENVs
ARG REACT_APP_ENV
ARG NODE_ENV
ARG CDN_PATH

RUN yarn build

ENTRYPOINT ["node"]

CMD ["dist/server"]
