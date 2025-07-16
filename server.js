const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000;
const data = []; //Array para guardar todas as submissoes
const lanches = [
  {
    "id": 1,
    "nome": "Stack Overflow Supreme",
    "ingredientes": [
      "pão brioche",
      "hambúrguer Wagyu 180 g",
      "queijo cheddar inglês maturado",
      "cebola caramelizada no bourbon",
      "aioli de trufa negra",
      "bacon crispy artesanal"
    ]
  },
  {
    "id": 2,
    "nome": "Null Pointer Deluxe",
    "ingredientes": [
      "pão de malte",
      "hambúrguer de picanha dry‑aged 200 g",
      "foie gras grelhado",
      "queijo gruyère",
      "maionese de vinho do Porto",
      "rúcula selvagem"
    ]
  },
  {
    "id": 3,
    "nome": "Bytecode Truffle",
    "ingredientes": [
      "pão brioche de carvão ativado",
      "hambúrguer Black Angus 200 g",
      "queijo camembert",
      "geleia de pimenta jalapeño",
      "chips de presunto de Parma",
      "aioli de alho confitado"
    ]
  },
  {
    "id": 4,
    "nome": "Full Stack Tower",
    "ingredientes": [
      "pão brioche artesanal duplo",
      "2 hambúrgueres Wagyu 150 g",
      "queijo gouda defumado",
      "cogumelos porcini salteados",
      "redução de balsâmico",
      "bacon de javali"
    ]
  },
  {
    "id": 5,
    "nome": "Merge Conflict BBQ",
    "ingredientes": [
      "pão australiano",
      "hambúrguer de short‑rib 200 g",
      "queijo raclette",
      "onion rings empanados",
      "barbecue de whisky",
      "picles caseiro"
    ]
  },
  {
    "id": 6,
    "nome": "Green Algorithm (Vegetariano)",
    "ingredientes": [
      "pão integral de ervas",
      "hambúrguer vegetal de grão‑de‑bico e espinafre",
      "queijo de cabra",
      "tomate heirloom",
      "rúcula",
      "pesto de manjericão e nozes"
    ]
  }
];
app.use(express.static(path.join(__dirname,'src', 'public'))); //para servir arquivos estaticos em public
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //para aceitar tbm em formato json
app.set('view engine', 'ejs'); //para usar templates
app.set('views', path.join(__dirname, 'src', 'views')); //para servir as views do dir views


app.get('/', (req, res) => {
  res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});


app.all('/', (req, res) => {
  res.status(405).send('Forbidden');
});

app.get('/api/lanches', (req, res) => {
  res.status(200).json(lanches);
});

app.all('/api/lanches', (req, res) => {
  res.status(405).send('Forbidden');
});

app.get('/sugestao', (req, res) => {
  const nome = req.query.nome;
  let ingredientes = req.query.ingrediente || [];
  if (!Array.isArray(ingredientes)) ingredientes = [ingredientes];

  res
    .status(200)
    .render('sugestao', { nome, ingredientes });
});


app.all('/sugestao', (req, res) => {
  res.status(405).send('Forbidden');
});


app.get('/contato', (req, res) => {
  res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, 'src', 'views', 'contato.html'));
});


app.post('/contato', (req, res) => {
  try {
    const { nome, assunto, email, mensagem } = req.body;
    data.push({ nome, assunto, email, mensagem });
    return res.status(200).render('confirmation', { nome, assunto, email, mensagem });
  } catch (error) {
    console.log(`Ops... ${error}}`);
    return res.status(500).send(`Ocorreu um erro ao enviar sua mensagem. Tente novamente`);
  }
});

app.all('/contato', (req, res) => {
  res.status(405).send('Forbidden');
});

app.get('/api/contato', (req, res) => {
  res.json(data);
});

app.use((req, res) =>{
  res.status(404).redirect('https://http.dog/404.jpg');
});

app.listen(PORT, () => {
  console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
