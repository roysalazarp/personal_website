#!/bin/bash
set -e

# Build production images
docker compose -f docker-compose.build.yml build

# Push builds to docker hub
docker push roysalazarportilla/portfolio_entry_nginx-reverse-proxy:latest
docker push roysalazarportilla/portfolio_entry_ui:latest