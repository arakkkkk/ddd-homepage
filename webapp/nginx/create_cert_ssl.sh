#!/bin/bash

domain='maman2030-himeji'

docker run -p 80:80 \
    -v `pwd`/letsencrypt:/etc/letsencrypt \
    -v `pwd`/letsencrypt/logs:/var/log/letsencrypt \
    -v `pwd`/www:/var/www \
    certbot/certbot certonly \
    --standalone
    --register-unsafely-without-email \
    --non-interactive --agree-tos \
    --force-renewal \
    --renew-by-default \
    -d ${domain}

aft=`sudo ls -l ./letsencrypt/live/${domain}/`

echo "## cert ##"
echo "$aft"
