const express = require('express');
const app = express();
const mat = require('./util/matematica');

app.get('/g:n', function(req, res){
    let n = req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});