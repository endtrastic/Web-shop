const express = require('express');
const router = express.Router();

let cartItems = []; // You can also import this from your main app if needed

router.post('/add-to-cart', (req, res) => {
    const bookId = req.body.id;

    if (!bookId) {
        return res.status(400).send('Book ID is required');
    }

    if (cartItems.includes(bookId)) {
        return res.status(400).send('Book is already in the cart');
    }

    console.log(`Book ID ${bookId} added to cart`);
    cartItems.push(bookId);
    res.status(200).send('Book added to cart');
});

// Route to display the cart
router.get('/', (req, res) => {
    res.render('pages/cart.ejs', { cart: cartItems });
});

module.exports = router;