const express = require('express')
const app = express()
const port = 3000

app.get('/vu', (req, res) => {
    let a = 1
    return res.send('Hello world')
});

app.listen(port, () => console.log(`listent event at  http://localhost:${port}`));