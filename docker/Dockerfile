FROM node:8.1.2

ARG API_DOMAIN
ARG VIRTUAL_HOST
ARG SOCKET_DOMAIN

ADD ./front /app

#Install nginx
RUN apt-get update \
    && apt-get install -y nano wget dialog net-tools \
    && apt-get install -y nginx -y \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && groupadd -r nginx \
    && useradd -r -g nginx nginx

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

#Add nginx configs
ADD docker/nginx.conf /etc/nginx/nginx.conf

#Set current directory
WORKDIR /app

ARG NPM_INSTALL=false
RUN if [ ${NPM_INSTALL} = true ]; then \
    npm install && npm run build \
;fi

EXPOSE 3000
EXPOSE 80
