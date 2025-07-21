# Dockerfile for a Node.js application

FROM node:18
# Set the working directory in the container
WORKDIR /app
# Copy the rest of the application code from 'src'
COPY src/package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY src/. .
# Expose the port your application listens on
EXPOSE 8080
# O comando para iniciar uma aplicação Node.js é 'node', seguido do arquivo principal.
CMD [ "node", "server.js" ]