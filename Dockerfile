# Author: Federico Engler
#
# The Dockerfile used to create the image for our frontend.
FROM node:16.15-alpine as node-builder

WORKDIR /app

# Install the dependencies on an early layer so that changes in the source code
# don't extend the image building time. As dependencies change rarely, this layer
# will be fairly stable.
COPY package*.json ./
RUN npm install --no-optional

# Copy the relevant remaining project files to run the NPM build step.
COPY .env .
COPY src src
COPY public public
COPY index.html vite.config.js .eslintrc.cjs ./

# Run the production build.
RUN npm run build

# Base image for deploying frontend components based on a Bitnami image in
# order to get get an appropiate security.
FROM bitnami/nginx:1.19

COPY --chown=1001 nginx.conf /opt/bitnami/nginx/conf/.
COPY --from=node-builder --chown=1001 /app/dist .

EXPOSE 8080