const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars  = require('express-handlebars')
const app = express()
const port = 3000




// HTTP Logger
app.use(morgan('combined'))


//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'));

console.log(__dirname);

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})