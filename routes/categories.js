const express = require('express');
const router = express.Router();

const categories = [
    { id: 1, name: 'Cafe' },
    { id: 2, name: 'Market' },
    { id: 3, name: 'Trips' },
];

router.get('/', (req, res) => {
    res.send(categories);
});

module.exports = router;