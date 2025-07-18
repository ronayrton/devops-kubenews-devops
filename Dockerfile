# Dockerfile for a Node.js application

FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code from 'src'
# ESTA LINHA É CRUCIAL E ESTAVA FALTANDO!
COPY src/. /app

# Install dependencies
RUN npm install


# Expose the port your application listens on
EXPOSE 8080

# Command to run the application
# O comando para iniciar uma aplicação Node.js é 'node', seguido do arquivo principal.
CMD [ "node", "server.js" ]