FROM nginx:alpine as base
LABEL name="docker.debugger.vn/lutos/frontend"
LABEL maintainer="ha.pham@digimed.vn"
WORKDIR /apps

FROM node:10-alpine as deps
WORKDIR /src
COPY package.json .
COPY package-lock.json .
RUN npm install

FROM deps as build
WORKDIR /src
COPY . .
RUN npm run build

FROM base
COPY --from=build /src/dist/apps/ /apps
COPY ./scripts/nginx.conf /etc/nginx/conf.d/site.conf
CMD nginx -g 'daemon off;'
