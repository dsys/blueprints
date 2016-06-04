FROM node:6.2
MAINTAINER Alex Kern <alex@pavlovml.com>

# install
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

# build
ENV NODE_ENV production
RUN ./node_modules/.bin/babel src -D -s --ignore __tests__,__mocks__ --out-dir dist && \
    rm -rf src && \
    npm prune

# run
ENV PORT 80
EXPOSE 80
CMD [ "node", "dist/index.js" ]
