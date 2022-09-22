FROM node:16.16 AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY prisma/schema.prisma ./prisma/

RUN npm run prisma:generate

COPY . .

RUN npm run build

FROM node:16.16 AS prod

WORKDIR /server

COPY --from=base /server/node_modules/ ./node_modules
COPY --from=base /server/package.json ./package.json
COPY --from=base /server/dist ./dist
COPY --from=base /server/prisma ./prisma
COPY --from=base /server/scripts ./scripts
COPY --from=base /server/src ./src
COPY --from=base /server/tsconfig* .

EXPOSE 3000

CMD [ "node", "./dist/main"]
