FROM quay.io/fedora/nodejs-16 as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


FROM node:16-alpine

RUN yarn global add sirv-cli

WORKDIR /app

COPY --from=builder /app/build /app
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
ENV HOST=0.0.0.0 PORT=3000
CMD ["sirv", "--quiet", "--etag", "--single"]
EXPOSE 3000
