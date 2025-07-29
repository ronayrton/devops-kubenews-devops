const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Post, initDatabase } = require('./models/post');
const config = require('./config/system-life');

const app = express();

// Middlewares
app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração das views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Servir arquivos estáticos
app.use('/styles', express.static(path.join(__dirname, 'static/styles')));
app.use('/img', express.static(path.join(__dirname, 'static/img')));

// Inicializar banco de dados
initDatabase();

// Rota principal - lista de posts
app.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            order: [['publishDate', 'DESC']]
        });
        res.render('index', { posts });
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        res.render('index', { posts: [] });
    }
});

// Rota para criar novo post
app.get('/post', (req, res) => {
    res.render('edit-news', { post: null });
});

// Rota para salvar novo post
app.post('/post', async (req, res) => {
    try {
        const { title, summary, content, publishDate } = req.body;
        await Post.create({
            title,
            summary,
            content,
            publishDate: publishDate || new Date().toISOString().split('T')[0]
        });
        res.redirect('/');
    } catch (error) {
        console.error('Erro ao criar post:', error);
        res.status(500).send('Erro ao criar post');
    }
});

// Rota para visualizar post específico
app.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.render('view-news', { post });
        } else {
            res.status(404).send('Post não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        res.status(500).send('Erro ao buscar post');
    }
});

// Rota para editar post
app.get('/post/:id/edit', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.render('edit-news', { post });
        } else {
            res.status(404).send('Post não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        res.status(500).send('Erro ao buscar post');
    }
});

// Rota para atualizar post
app.post('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            const { title, summary, content, publishDate } = req.body;
            await post.update({
                title,
                summary,
                content,
                publishDate: publishDate || new Date().toISOString().split('T')[0]
            });
            res.redirect('/');
        } else {
            res.status(404).send('Post não encontrado');
        }
    } catch (error) {
        console.error('Erro ao atualizar post:', error);
        res.status(500).send('Erro ao atualizar post');
    }
});

// API para criar posts via JSON
app.post('/api/post', async (req, res) => {
    try {
        const { title, summary, content, publishDate } = req.body;
        const post = await Post.create({
            title,
            summary,
            content,
            publishDate: publishDate || new Date().toISOString().split('T')[0]
        });
        res.json({ success: true, post });
    } catch (error) {
        console.error('Erro ao criar post via API:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API para listar posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({
            order: [['publishDate', 'DESC']]
        });
        res.json(posts);
    } catch (error) {
        console.error('Erro ao buscar posts via API:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 KubeNews rodando na porta ${PORT}`);
    console.log(`📱 Acesse: http://localhost:${PORT}`);
});
