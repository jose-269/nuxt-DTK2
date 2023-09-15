FROM node:16 as builder

WORKDIR /app

COPY . .

RUN npm i 

RUN npm run generate


#Produccion
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY  server.js .

COPY package.json .

RUN npm i --omit=dev

RUN rm package-lock.json && rm package.json

CMD ["node","/app/server.js"]




