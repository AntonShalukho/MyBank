FROM nginx:1.21.6-alpine
EXPOSE 80
COPY ci/nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
