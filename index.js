const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routers/index');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://real:real@cluster0.oqcsoi7.mongodb.net/pfe2?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
