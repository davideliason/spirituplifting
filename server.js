const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.end("hello from index on server";)
});

app.listen(8080, () => {
    console.log("server at port 8080");
});