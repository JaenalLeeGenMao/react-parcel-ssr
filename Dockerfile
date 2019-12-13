FROM node:8-alpine

WORKDIR /app

RUN apk add --no-cache --virtual deps \
  python \
  build-base \
  && yarn \
  && apk del deps \
  && rm -rf /var/cache/apk/*

# Consume required ENVs
ARG REACT_APP_ENV
ARG NODE_ENV
ARG CDN_PATH
ARG VIDEO_ENDPOINT
ARG AUTH_ENDPOINT
ARG SUBSCRIPTION_API_URL
ARG OAUTH_APP_KEY_WEB
ARG OAUTH_APP_SECRET_WEB
ARG OAUTH_APP_KEY_MOBILE
ARG OAUTH_APP_SECRET_MOBILE

RUN yarn build
COPY dist/. /app/

ENTRYPOINT ["node"]

CMD ["server"]
