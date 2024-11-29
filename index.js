const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3005;

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



const AdminRoutes = require('./routes/admin');
const ShopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', AdminRoutes)
app.use(ShopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<b>Page not found</b>')
})



app.listen(port, () => {
    console.log(`Server is running on:  http://localhost:${port}`);
});