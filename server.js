const express = require('express');

const app = express();

app.get('/api/users', (req,res) => {
    res.json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }]);
});

app.listen(8080, () => {
    console.log("server at port 8080");
});