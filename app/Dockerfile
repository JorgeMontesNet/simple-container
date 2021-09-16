# Super simple web app
# Linux x64
FROM node:current-alpine

# Create directory in container image
RUN mkdir -p /usr/src/app

# Copy app code to container image
COPY . /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Install dependencies from package.json
RUN npm Install

# Command for container to execute
ENTRYPOINT ["node", "server2.js"]