let express = require('express')
let app = express();

let username = 'BATTAR'
let password = '0000'

app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.send(`
    <h1> WELCOME TO NEW WORLD</h1>
    <h1> login dulu bro </h1>
    <form action="/login" method="POST">
        <input type="text" name="username">
        <input type="password" name="password">
        <button type="submit">submit</button>
    </form>`)
})

app.post('/login', (req, res) => {
    let user = req.body.username
    let passwordnya = req.body.password
    if(user === username) {
        if(passwordnya === password) {
            res.send(`
            <h1>DOWNLOAD GAME </h1>
            <br>
            <h1>-GTA V </h1>
            <h1>-COC </h1>
            <h1>-AOV </h1>
            <h1>-ML </h1>
            <button onclick="alert('game sedang di unduh')">unduh</button>
            `)
        }
    } else {
        res.send('kamu gak bisa login')
    }
})

app.listen(8000)
