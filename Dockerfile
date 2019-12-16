FROM node:8-alpine

WORKDIR /app

COPY . .

ENTRYPOINT ["node"]

CMD ["dist/server"]
