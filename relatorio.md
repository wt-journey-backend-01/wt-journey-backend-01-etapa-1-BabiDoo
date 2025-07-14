<sup>Esse é um feedback gerado por IA, ele pode conter erros.</sup>

Você tem 6 créditos restantes para usar o sistema de feedback AI.

# Feedback para BabiDoo:

Nota final: **22.8/100**

Olá, BabiDoo! 🚀 Espero que você esteja tendo um ótimo dia! Vamos conversar sobre seu desafio de servidor Express.js e explorar juntos os pontos que podemos melhorar? Primeiramente, quero parabenizá-la pelo esforço que você colocou neste projeto! 👏

### 🎉 Conquistas Bônus
É importante reconhecer que você já fez um bom trabalho ao configurar o servidor, configurar as rotas e usar o EJS para renderizar as views. Isso é uma base sólida! Continue assim! 💪

### 🚧 Pontos de Melhoria

Agora, vamos dar uma olhadinha nos requisitos que não foram atendidos e investigar as causas principais. Vou fazer isso de forma detalhada para que você possa entender bem cada parte.

#### 1. **Rota `/`**
- **Requisito**: "deve conter dois campos de input do tipo texto com atributos 'name' sendo 'nome' no primeiro e 'ingredientes' no segundo."
  
  **Causa Raiz**: O endpoint que você configurou para a rota `/` está servindo um arquivo HTML estático (`index.html`). Isso significa que, a menos que esse arquivo contenha os campos de input requisitados, sua aplicação não atenderá a esse requisito. Você precisa garantir que o arquivo `index.html` tenha os campos corretos ou alterar a rota para renderizar uma view que inclua esses campos. Vamos garantir que os inputs estejam presentes!

#### 2. **Rota `/sugestao`**
- **Requisitos**: "deve retornar status code 200 com content-type html", "deve exibir o nome e os ingredientes enviados via query string na página HTML", "deve conter uma âncora para a rota raiz `/`."

  **Causa Raiz**: A sua rota `/sugestao` parece estar configurada para renderizar uma view, mas não temos informações sobre como você está estruturando essa view (se o arquivo EJS está correto). Certifique-se de que a view `sugestao.ejs` está configurada para exibir o `nome` e `ingredientes` corretamente. Também, adicione uma âncora que direcione para a raiz `/`.

#### 3. **Rota `/contato`**
- **Requisitos**: 
  - "deve conter um campo de input ou textarea do tipo texto com atributo name como 'nome', 'assunto' e 'mensagem'."
  - "deve retornar uma página HTML diretamente (status code 200) ou redirect para `/contato-recebido`."
  - "a página de resposta deve exibir o 'nome', 'email', 'assunto' e 'mensagem' enviados no formulário."
  - "deve conter uma âncora para a rota raiz `/`."

  **Causa Raiz**: Assim como na rota `/`, o problema pode estar na falta de um arquivo HTML ou EJS correspondente que contenha os campos de input necessários. Você deveria garantir que a página de contato contém todos os inputs e também que a renderização na resposta do POST está de acordo com os requisitos, exibindo os dados corretamente. Vamos revisar essa parte!

#### 4. **Rota `/api/lanches`**
- **Requisitos**: "não deve aceitar método POST, PUT, DELETE, PATCH."

  **Causa Raiz**: A sua rota `/api-contato` que você implementou aceita apenas o método GET. Para a rota `/api/lanches`, você precisa garantir que não existem endpoints que aceitem esses métodos. Certifique-se de que ela seja configurada apenas para GET. Um exemplo simples seria algo como:

  ```javascript
  app.get('/api/lanches', (req, res) => {
      res.json(data);
  });
  ```

### Resumo Final
BabiDoo, você já tem uma boa estrutura e é visível o seu esforço! 🎊 Agora, com algumas melhorias nas views e nas rotas, você conseguirá atender a todos os requisitos. Sinta-se à vontade para me perguntar se precisar de mais ajuda com alguma parte específica do código. Estou aqui para te apoiar! 💡

Continue firme, e vamos em frente! 🚀