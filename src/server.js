const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000;
const data = []; //Array para guardar todas as submissoes
app.use(express.static(path.join(__dirname, 'public'))); //para servir arquivos estaticos em public
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //para aceitar tbm em formato json
app.set('view engine', 'ejs'); //para usar templates
app.set('views', path.join(__dirname, 'views')); //para servir as views do dir views




app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});


app.post('/contato', (req, res) => {
  try {
    const { name, email, message } = req.body;
    data.push({ name, email, message });
    return res.status(201).render('confirmation', { name, email, message });
  } catch (error) {
    console.log(`Ops... ${error}}`);
    return res.status(500).send(`Ocorreu um erro ao enviar sua mensagem. Tente novamente`);
  }
});

app.get('/api-contato', (req, res) => {
  res.json(data);
});

app.use((req, res) =>{
  res.status(404).redirect('https://http.dog/404.jpg');
});

app.listen(PORT, () => {
  console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
