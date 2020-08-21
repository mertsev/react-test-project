FROM node:14-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

ADD package.json ./
ADD package-lock.json ./
RUN npm install

ADD . /usr/app

RUN npm run build

EXPOSE 8080

CMD ["/usr/app/node_modules/.bin/serve", "-s", "build", "-p", "8080"]
