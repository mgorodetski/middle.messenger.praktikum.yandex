const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(PORT, function () {
    console.log(`Messenger app listening on port ${PORT}!`);
}); 