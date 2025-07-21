# Lab 01 - Docker e IA para DevOps

Este lab mostra como usar Docker e a IA do Docker MCP para construir e otimizar uma aplicação moderna com Node.js.

## Aplicação usada
Conversor de temperatura com Node.js

## O que foi feito

- Dockerfile criado manualmente
- Dockerfile otimizado com ajuda da IA (Docker AI via MCP)
- Container executando na porta 8080

## IA no DevOps
A IA foi usada para:
- Sugerir melhorias de performance no Dockerfile
- Reduzir o tamanho da imagem
- Otimizar o cache de build

## Prints e logs
Veja na pasta `/logs` os prints do uso da IA


# Ativar IA da Docker

- Logon na conta da docker
- Vai na engrenagem e seleciona Beta features, e ativa na opção Enable Docker AI
- Vai aparecer a IA ASK GORDON
- Necessário esta com docker desktop atualizado.

# Prompat para criar uma imagem com a IA

- Execute um container usando a imagem nginx e com um publish de porta 8080:80
- Crie o container com essas informações


## O que é imagem

- FileSystem que ja possui uma base e adiciona mais arquivos emcima

# Definição do dockerfile
```dockerfile
FROM
WORKDIR
COPY
RUN
COPY ..
EXPOSE
CMD
```

## Enviar imagem para o Docker Hub

- Namespace/repositorio:tag
- ronayrton/app-maratona:v1

## Colocando a versão na imagem

## Autenticar via terminal no docker hub e enviar imagem
- Docker login
- docker push ronayrton/app-maratona:v1
- Podem colocar quantas imagem quiser, desde que seja público


## Interação do o Docker AI no Power Shell
- docker ai

- Analise o projeto conversao temperatura no diretorio ./src e avalie o dockerfile em relação a qualidade e possiveis melhorias. Responda em portugues Brasil.

- Ele vai mostrar o que deve melhorar, mas é importante voce saber o que tem que fazer.

## Etapas

- Devops e importancia na carreira
- Pilares, fundamentos e vantagens Devops
- Etapas fluxo devops
- Docker e Container
- Criação de container DB
- Criação de Imagens
- Interação com a AI


# Proxima Etapa

O docker ele ajuda bastante, porém ajudar a executar app de forma isolada. Quando agente fala em escalar as apps, resiliencia, tornar mais eficiente em ambiente produção, ter muito mais disponibilidade, aí que entra o Kubernetes. 