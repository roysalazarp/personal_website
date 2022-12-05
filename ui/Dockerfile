FROM node:alpine
WORKDIR /usr/app
RUN npm install --global pm2
COPY ./package.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build
EXPOSE 5000
USER node
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]