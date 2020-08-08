const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {    
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
    } = require('./pages')


// COnfigurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
// Receber os dados do re.body
.use(express.urlencoded({extended: true}))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
// Rotas da aplicação
.get("/", pageLanding) 
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5500)
