const express = require('express');
const router = express.Router();

let cartItems = [];

// POST route to add book to cart
router.post('/add-to-cart', (req, res) => {
    // Extract data from request body
    const bookPrice = req.body.price;
    const bookAuthor = req.body.author;
    const bookTitle = req.body.title;
    let bookQuantity = 1;  

    if (!bookPrice || !bookAuthor || !bookTitle) {
        return res.status(400).send('Missing book details');
    }


    // Check if the book is already in the cart
    const Existbooks = cartItems.findIndex(item => 
        item.bookTitle === bookTitle);

        if (Existbooks !== -1) {
            const currentQuantity = cartItems[Existbooks].bookQuantity;
    
            if (currentQuantity >= 5) {
                console.log(`Sorry, you shall not buy more than 5 copies of "${bookTitle}"`);
                return res.status(400).send(`Sorry, you can only buy a maximum of 5 copies of "${bookTitle}"`);
            } else {
                cartItems[Existbooks].bookQuantity += 1;
                return res.status(200).send(`Updated quantity for "${bookTitle}" to ${cartItems[Existbooks].bookQuantity}`);
            }
        } else {
            cartItems.push({ bookPrice, bookAuthor, bookTitle, bookQuantity });
            return res.status(200).send(`Book "${bookTitle}" added to cart`);
        }
});

// Route to display the cart
router.get('/', (req, res) => {
    res.render('pages/cart.ejs', { cart: cartItems });
});

module.exports = router;
