FROM node:18.17.1

WORKDIR /usr/src/fidgrove

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
