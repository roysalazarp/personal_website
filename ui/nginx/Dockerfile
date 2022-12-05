FROM nginx:alpine
RUN rm /etc/nginx/conf.d/*
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 5000
CMD [ "nginx", "-g", "daemon off;" ]
