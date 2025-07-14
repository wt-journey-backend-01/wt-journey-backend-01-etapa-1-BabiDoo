const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});


app.post('/contato', (req, res) => {
    try {
        const { name, email, message } = req.body;
        res.status(201).render('confirmation', { name, email, message })
    } catch (error) {
        console.log(`Ops... ${error}}`)
    }
})


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});

