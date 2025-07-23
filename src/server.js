const express = require('express');
<<<<<<< HEAD
const os = require('os')
const app = express();
const conversor = require('./convert')
const bodyParser = require('body-parser');
const config = require('./config/system-life');
const path = require('path');

app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/fahrenheit/:valor/celsius', (req, res) => {

    let valor = req.params.valor;
    let celsius = conversor.fahrenheitCelsius(valor);
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/celsius/:valor/fahrenheit', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = conversor.celsiusFahrenheit(valor);
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

app.get('/', (req, res) => {

    res.render('index',{valorConvertido: '', maquina: os.hostname()});
});

app.post('/', (req, res) => {
    let resultado = '';

    if (req.body.valorRef) {
        if (req.body.selectTemp == 1) {
            resultado = conversor.celsiusFahrenheit(req.body.valorRef)
        } else {
            resultado = conversor.fahrenheitCelsius(req.body.valorRef)
        }
    }

    res.render('index', {valorConvertido: resultado, "maquina": os.hostname()});
 });

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
=======
const app = express();
const models = require('./models/post')
const bodyParser = require('body-parser')
const promBundle = require("express-prom-bundle");
const config = require('./system-life');
const middlewares = require('./middleware')

const metricsMiddleware = promBundle({
    includeMethod: true, 
    includePath: true, 
    includeStatusCode: true, 
    includeUp: true,
    promClient: {
        collectDefaultMetrics: {
        }
      }
});

app.use(middlewares.countRequests)
app.use(metricsMiddleware)
app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');


app.get('/post', (req, res) => {
    res.render('edit-news', {post: {title: "", content: "", summary: ""}, valido: true});
});

app.post('/post', async (req, res) => {

    let valid = true;

    if ((req.body.title.length !== 0 && req.body.title.length < 30) && 
        (req.body.resumo.length !== 0 && req.body.resumo.length < 50) &&
        (req.body.description.length !== 0 && req.body.description.length < 2000)) {
        valid = true;
    } else {
        valid = false;
    }

    if (valid) {
        await models.Post.create({title: req.body.title, content: req.body.description, summary: req.body.resumo, publishDate: Date.now()});
        res.redirect('/');
    } else {
        res.render('edit-news', {post: {title: req.body.title, content: req.body.description, summary: req.body.resumo}, valido: false});
    }
    
});

app.post('/api/post', async (req, res) => {

    console.log(req.body.artigos)
    for(const item of req.body.artigos) {

        await models.Post.create({title: item.title, content: item.description, summary: item.resumo, publishDate: Date.now()});
    }

    // models.Post.create({title: req.body.title, content: req.body.description, summary: req.body.resumo, publishDate: Date.now()});
    res.json(req.body.artigos)
});

app.get('/post/:id', async (req, res) => {

    const post = await models.Post.findByPk(req.params.id);
    res.render('view-news',{post: post});
});


app.get('/', async (req, res) => {

    const posts = await models.Post.findAll();
    res.render('index',{posts: posts});
});

models.initDatabase();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
>>>>>>> 99f8cd4 (feat: projeto KubeNews - lab Docker e DevOps)
