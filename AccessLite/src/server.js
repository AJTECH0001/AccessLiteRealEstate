const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/tokenPrice', async (req, res) => {
    try {
        // Fetch token price from your data source
        const response = await fetch('YOUR_TOKEN_PRICE_API');
        const data = await response.json();
        const tokenPrice = data.price; // 

        res.json({ tokenPrice });
    } catch (error) {
        console.error('Error fetching token price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
