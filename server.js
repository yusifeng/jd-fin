let express = require('express')

let app = express()

app.use(express.static('docs') )

app.use('/*', (req, res) => {
    res.redirect('/')
})

app.listen(8081, () => {
    console.log('服务器已经开启')
})
