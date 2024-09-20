const express = require('express');
const app = express();
const Cat = require('./models/cat.model');
require('./mongoose-connect');
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/cat', async (req, res) => {

    const cat1 = {
        name: req.body.name,
        race: req.body.race
    }

    try {
        const newCat = new Cat(cat1);
        newCat.save();
        res.json({ message: 'Gato Cargado' })

    } catch (error) {
        console.log(error);
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})