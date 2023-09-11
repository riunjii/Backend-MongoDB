import express from 'express';

const app = express()
const port = 4000

app.use(express.json()) //irá fazer o parse de arquivos json

//rotas de conteudo publico
app.use('/', express.static('public'))

//configura o fivicon
app.use('/favicon.ico', express.static('public/images/computer.png'))

//rotas de api
app.get('/api',(req,res) => {
    res.status(200).json({
            message: 'API Fatec 100% funcional👍',
            version: '1.0.1'
    })
})
//rota de excessão deve ser a ULTIMA!!!
app.use(function(req,res){
    res.status(404).json({
        errors:[{
            value:'${req.originalUrl}',
            msg: 'A rota ${req.orginialUrl} não existe nesta API!',
            param: 'invalid route'
        }]
    })
})

app.listen(port, function(){
    console.log('💻Servidor rodando na porta ${port}')
})
