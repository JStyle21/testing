const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    zz = { 1: 1, 2: 2, 3: 3 };
    res.render('reg', zz);
});

app.listen(port, () => {
    console.log(`Server Started on Port: ${port}`);
});
