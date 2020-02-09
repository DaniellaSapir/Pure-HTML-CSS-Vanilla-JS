
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//serve static pages
// app.use('/static', express.static(path.join(__dirname, 'public')))

//Routing
app.get('/', function (req, res) {
    // res.send('Hello World!');
    // res.sendFile('C:/Users/daniella/Desktop/Workiz Task/index.html');
});



