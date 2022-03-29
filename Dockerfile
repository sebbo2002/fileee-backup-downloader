FROM node:lts-alpine@sha256:da7ef512955c906b6fa84a02295a56d0172b2eb57e09286ec7abc02cfbb4c726 as build-container

WORKDIR "/app"
RUN apk add --no-cache --update chromium

COPY package*.json "/app/"
RUN npm ci

COPY . "/app/"
RUN npm run build && \
    rm -rf ./.github ./src ./test ./node_modules


FROM node:lts-alpine@sha256:da7ef512955c906b6fa84a02295a56d0172b2eb57e09286ec7abc02cfbb4c726
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
WORKDIR "/app"

RUN apk add --no-cache --update dumb-init chromium && \
    ln -s /app/dist/bin/start.cjs /usr/local/bin/start

COPY --from=build-container /app/package*.json "/app/"
RUN npm ci --only-production

COPY --from=build-container "/app" "/app"
USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["/usr/local/bin/start"]
