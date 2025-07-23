# Dockerfile para o app KubeNews
# Imagem base Node.js Alpine (leve e rápida)
FROM node:22-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências para instalar primeiro (cache eficiente)
COPY src/package*.json ./

# Instala as dependências do projeto
RUN npm install --prefix ./

# Copia o restante do código-fonte para o container
COPY src/ ./

# Define a porta padrão do app
ENV PORT=8080
EXPOSE 8080

# Comando para iniciar o app
CMD ["node", "server.js"] 

