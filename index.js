const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3008;

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true}));


const AdminRoutes = require('./routes/admin');
const ShopRoutes = require('./routes/shop');
const CartRoutes = require('./routes/shopcart');

function writeCartData(cartData) {
  fs.writeFileSync(cartFilePath, JSON.stringify(cartData));
}




app.use(express.static(path.join(__dirname, 'public')))

app.use('/cart', CartRoutes);   
app.use('/admin', AdminRoutes);
app.use(ShopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<b>404, Page not found</b>')
})


app.listen(port, () => {
    console.log(`Server is running on:  http://localhost:${port}`);
});



// LOOK AT JOGA_MYSQL WHERE THE DATA IS BEING FETCHED BY JSON FILE WITH PATH!!!