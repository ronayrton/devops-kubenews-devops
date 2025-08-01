var express = require('express');
var router = express.Router();

let isHealth = true;
let readTime = new Date(Date.now());
let isRead = () => { 
    return readTime < new Date(Date.now());
};

router.put('/stress/tempo/:tempoStress/intervalo/:intervalo/ciclos/:ciclos', (req, res) => {
    // Função de stress removida por enquanto
    res.send("OK - Stress function temporarily disabled");
});

router.get('/ready', (req, res) => {
   
    if (isRead()) {
        res.statusCode = 200;
        return res.send('Ok');
    } else {
        res.statusCode = 500;
        return res.send('');
    }   
});

router.get('/health', (req, res) => {
   
    res.send("OK");
});

router.put('/unhealth', (req, res) => {

    isHealth = false;
    res.send("OK");
});

router.put('/unreadyfor/:seconds', (req, res) => {
    
    const dado = new Date(new Date(Date.now()).getTime() + (1000 * req.params.seconds));
    readTime = dado;    
    res.send("OK");
});

var healthMid = function (req, res, next) {
    
    if (isHealth) {
        next();
    } else {
        res.statusCode = 500;
        return res.send('');
    }   
};

exports.routers = router;
exports.middlewares = { healthMid};