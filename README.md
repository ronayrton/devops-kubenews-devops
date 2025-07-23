# KubeNews

> Projeto desenvolvido no Lab Docker e DevOps na prática da Maratona Devops IA (14/07)

## Sobre o projeto

O **KubeNews** é uma aplicação Node.js para publicação de notícias, criada para demonstrar práticas modernas de conteinerização com Docker. O objetivo deste lab é mostrar como construir, empacotar e rodar aplicações modernas de forma simples, portátil e escalável usando o Docker.


## Tecnologias utilizadas neste lab
- **Node.js** + **Express** (backend)
- **EJS** (views)
- **Sequelize** ORM
- **SQLite** (em memória, para labs e prototipagem)
- **Docker** (containerização)

## Principais diferenciais
- **Roda sem banco de dados externo**: por padrão, usa SQLite em memória, ideal para labs, testes e prototipagem.
- **Totalmente conteinerizado**: build e execução simples via Docker.

---

## Como a aplicação roda sem banco de dados externo

A lógica de persistência foi adaptada no arquivo `src/models/post.js`:
- O Sequelize foi configurado para usar `sqlite::memory:` por padrão, criando um banco em memória a cada execução do app.
- Não é necessário rodar ou configurar nenhum banco externo para testar, desenvolver ou demonstrar a aplicação.
- Caso queira usar um banco real no futuro, basta ajustar as variáveis de ambiente (ver comentários no próprio arquivo).

---

## Como rodar (modo LAB, sem banco externo)

1. **Build da imagem:**
```sh
docker build -t kubenews .
```
2. **Execute o container:**
```sh
docker run -p 8080:8080 kubenews
```
> O app estará disponível em http://localhost:8080

### Status da aplicação

- ✅ **Aplicação rodando localmente via Docker**
- URL de acesso: [http://localhost:8080](http://localhost:8080)
- Ambiente: **Local (Lab Docker)**

#### Exemplos visuais

- **Tela inicial sem posts:**

  ![Tela inicial do KubeNews rodando localmente](./docs/print-kubenews-local.png)

- **Tela após popular com posts de exemplo:**

  ![Tela do KubeNews com posts de exemplo](./docs/print-kubenews-post.png)

---

## Como popular rapidamente com dados de exemplo

Você pode usar o arquivo `popula-dados.http` para inserir vários posts de exemplo automaticamente:

1. **Abra o arquivo `popula-dados.http` em uma IDE que suporte requisições HTTP** (ex: VS Code com REST Client, Cursor, Postman, Insomnia, etc).
2. **Ajuste a porta para 8080, se necessário:**
   ```http
   POST http://localhost:8080/api/post
   ```
3. **Envie a requisição POST** (no REST Client, clique em "Send Request"; no Postman, cole o JSON e envie como POST para o endpoint acima).
4. **Acesse a página inicial** (`http://localhost:8080/`) para ver os posts inseridos.

> **Atenção:** O endpoint `/api/post` aceita apenas requisições POST. Se você tentar acessar pelo navegador, verá "Cannot GET /api/post". Use uma ferramenta de requisições HTTP para popular os dados.

---

## Estrutura do Projeto
- Código-fonte: `./src`
- Dockerfile na raiz
- Frontend em EJS
- Prints: `./docs/print-kubenews-local.png`, `./docs/print-kubenews-post.png`, `./docs/image.png`
- Popular dados: `popula-dados.http`

## Scripts úteis
- `npm start` — inicia o servidor Node.js

---

## Como expandir
- Adicione autenticação e autorização
- Implemente banco de dados externo (PostgreSQL, MySQL, etc)
- Integre com ferramentas de monitoramento e CI/CD
- Prepare para deploy em Kubernetes (proximo lab)

---

## Autor
Projeto criado para fins educacionais e portfólio        
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