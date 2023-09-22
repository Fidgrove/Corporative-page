FROM node:18.17.1 AS build-env

WORKDIR /src

ARG NUXT_ENV_API_URL
ENV NUXT_ENV_API_URL ${NUXT_ENV_API_URL}

ARG NUXT_ENV_GTM
ENV NUXT_ENV_GTM ${NUXT_ENV_GTM}

COPY package*.json ./
# Runs the "npm ci" command to install the dependencies specified in the package-lock.json file.
RUN npm install -g npm && npm ci

COPY . .
RUN npm run generate



FROM nginx:1.25.2 AS prod-env

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-env /src/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
