const express = require('express');
const router = express.Router();

let cartItems = []; // You can also import this from your main app if needed

// POST route to add book to cart
router.post('/add-to-cart', (req, res) => {
    // Extract data from request body
    const bookPrice = req.body.price;    
    const bookAuthor = req.body.author;  
    const bookTitle = req.body.title;    

    console.log(`Received book: Author: ${bookAuthor}, Title: ${bookTitle}, Price: ${bookPrice}`);

    // Check if all necessary data is present
    if (!bookPrice || !bookAuthor || !bookTitle) {
        return res.status(400).send('Missing book details');
    }

    // Add to cart
    cartItems.push({ bookPrice, bookAuthor, bookTitle });

    res.status(200).send('Book added to cart');
});

module.exports = router;


// Route to display the cart
router.get('/', (req, res) => {
    res.render('pages/cart.ejs', { cart: cartItems });
});

module.exports = router;