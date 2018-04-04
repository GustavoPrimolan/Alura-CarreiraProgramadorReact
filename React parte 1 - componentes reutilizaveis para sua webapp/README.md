-------------------------------------------------------------------------
<h1>Seção 01 - Criando e configurando o projeto</h1>

<h2>Explicação do Projeto</h2>
Bem-vindo ao curso de React. Meu nome é Alberto Souza, vou estar com vocês apresentando este Framework tão famoso no mundo JavaScript.

Você pode se perguntar: "Por que eu vou usar o React?". A grande vantagem é que ao usá-lo, você facilitará a construção, a manipulação e a atualização do estado da sua tela.

Cadastro de livro

Nosso projeto terá um cadastro com dois cruds, um de "Autores" e outro de "Livros".

Neste primeiro curso, veremos o básico do React para que depois você consiga criar as suas aplicações. Nos próximos cursos veremos as tecnologias adjacentes a esse Framework - que foi criado pelo Facebook e é focado em construir uma View.

Veremos como construir a seguinte tela.

Autores

Após preenchermos os campos e enviarmos os dados, o estado ficará em branco novamente e a tabela abaixo será atualizada.

Autores II

São recursos que podem ser úteis em aplicações de dashboard, por exemplo, em que muitos elementos podem ser atualizados na tela. O React facilitará a nossa vida!

Precisaremos realizar ações semelhantes na página de cadastro de livros.

Livros

A nossa aplicação será composta por uma única tela, após carregarmos o arquivo index.html, a partir dali não daremos mais reload. Isto é o que chamamos de Single Page Applicantion (SPA), que são aplicações com uma única página.

Nossa recomendação é que neste curso, você foque em aprender o básico de React, a navegação, a comunicação entre os componentes e aproveitar bem o que o Framework te oferece. Não se preocupe em conhecer os vários frameworks adjacentes, vamos aprender primeiramente o que é essencial.

A nossa aplicação do Front-End irá consumir informações do Back-end, sendo está outra vantagem do React.

Nós vamos disponibilizar um arquivo .jar, que contem o projeto em Java já pronto e você poderá executá-lo na sua máquina.

Ao rodarmos localmente, não veremos os dados dos outros alunos e teremos a garantia de que a aplicação estará no ar. Você encontrará explicações mais detalhadas aqui!

Com a API pronta poderemos cadastrar os autores e livros.

Espero que você embarque nesta aventura e aprenda como trabalhar com o Framework mais famoso do mercado JavaScript atualmente. Ele é bastante útil!

Assista aos vídeos e resolva os exercícios, caso tenha alguma dúvida, acesse o nosso fórum.

Mais adiante, veremos como fazer as instalações necessários para que a aplicação funcione e para que seja possível rodar o React.

<h2>Configuração ambiente</h2>

Vimos como será nossa aplicação, agora montaremos o ambiente inicial para termos o "Hello World" funcionando.

Eu aconselho que você faça o download do arquivo JAR e rodá-lo sempre localmente. Pode ser que a aplicação saia do ar em algum momento e você não ficará dependente do nosso suporte.

Primeiramente, vamos fazer funcionar o React versão para Front-End.

O React é uma biblioteca do Facebook e podemos baixá-lo no seu Github.

React Download

Qual foi a motivação do Facebook para criar o React? Nós queremos manter ou alterar o estado dos componentes da nossa aplicação. Mas no Facebook, eles precisam trabalhar com diferente notificações no menu visualizado pelo usuário.

Aula1_Menu Facebook

Eles precisam gerenciar muita coisa na tela e o React é ótimo para isto!

Às vezes também o time precisa trabalhar com diferentes pontos de acesso do Back-End, não é necessário criar três aplicações diferentes. Você criará uma que devolve um formato de dados que pode ser lido por diferentes aplicações. Por exemplo, no nosso caso estamos retornando um JSON.

Json

Com este formato, podemos consumi-lo em uma aplicação Android ou iOS, por exemplo, ambas criadas com o React. Quando trabalhamos com JSON - um formato bastante conhecido - você tem a opção de trabalhar com diferentes clientes.

Em seguida, vamos começar a montar a nossa configuração. É possível baixar manualmente o React versão 15.3.1..

Download React2

Você tem a opção de fazer o download do react.js (com a core do framework) e react-dom (que permite manipular os elementos da página).

No entanto, no curso iremos seguir o que o Facebook nos sugeriu fazer: eles criaram um projeto que se chama create-react-app e que nos permite criar uma aplicação com React muito rapidamente. Com ele não precisaremos nos preocupar com as configurações do React. Às vezes você tem o interesse de trabalhar com ECMAScript 6 ou um transpiler.

Neste curso, consideramos que você já tem um conhecimento de JavaScript. Recomendamos que você faça também o curso de JavaScript Avançado I<), você pode aprender mais sobre ECMAScript 6.

Para que o usuário não se precisasse se preocupar com isso, tudo já foi configurado . No fim do curso, temos um vídeo em que veremos como instalar o React e fazer as configurações manualmente.

Então, eu recomendo que você tenha o create-react-app para seguirmos.

Este é um projeto com um código JavaScript de Back-End escrito do lado do servidor, por isso, precisaremos ter instalado também o Node.js, versões posteriores à versão 4 LTS.

Node.js

Se já tivermos instalado, podemos descobrir qual versão estamos usando o comando node -v. Na minha máquina, eu estou usando a versão v4.2.3.

Alura-Azul:alberto alura$ node - v
v4.2.3
Alura-Azul:alberto alura$
Precisaremos do Node para usarmos o create-react-app, não iremos desenvolver efetivamente uma aplicação de back-end com JavaScript.

Você encontrará os passos para a instalação do Node.js clicando aqui.

Com o Node.js instalado, faremos um teste no terminal se ele foi instalado e se o npm - a ferramenta de execução de script prontos - está disponível.

Alura-Azul:alberto alura$ node - v
v4.2.3
Alura-Azul:alberto alura$ npm -v
3.8.3
Com os dois instalados, chegou o momento de adicionarmos o create-react-app.

create-react-app

Vemos que devemos escrever a seguinte linha no terminal:

npm install -g create-react-app
O -g gera uma instalação global na sua máquina. Mas eu segui uma outra opção, criei um pasta chamada alberto e vou usá-la como inicio dos código JavaScript. Para instalação, vou usar o seguinte comando:

Alura-Azul:alberto alura$ npm -v
3.8.3
Alura-Azul:alberto alura$ pwd
/Users/alura/Documents/alberto
Alura-Azul:alberto alura$ npm install create-react-app
Então, o create-react-app será instalado. Após a instalação, será criada a pasta node_modules e dentro dela, a pasta .bin.

Aula 1_Instalação Node

Depois, vamos adicionar a seguinte linha:

Alura-Azul:alberto alura$ ./node_modules/.bin/create-react-app
Estamos fazendo desta forma, porque não fizemos a instalação global. Se o -g foi usado anteriormente, você rodará apenas o create-react-app.

Alura-Azul:alberto alura$ create-react-app
Meu conselho é que você faça com o .bin forma, porque desta forma você terá controle do create-react-app usada e não precisará em ficar atualizando essa informação.

Agora, criaremos o cdc-admin.

Alura-Azul:alberto alura$ ./node_modules/.bin/create-react-app cdc-admin
Será feita a instalação de todas as depedências que o create-react-app fará o download. Já virá o Babel, WebPack. Agora, se precisamos usar o código de ECMAScript 6, que não funcionará no navegador, teremos que ter o suporte dentro do Node.js. Nós precisamos que o código seja transcrita para uma versão que o Node suporte - neste ponto, será útil o Babel, que será o responsável por fazer esta compilação. Porém, ele irá gerar um código final que terá um monte de coisas de Back-End e JavaScript. Ele então, precisará do WebPack. A configuração não é algo trivial. Ela tomará bastante tempo, então, ao eliminar esta parte do processo, o React facilitará bastante.

Após alguns minutos de instalação, será criado um servidor local para você subir sua aplicação JavaScript,

Aula 1_instalação react 2

Você também terá a opção de empacotar a aplicação para disponibilizá-la para o deploy.

Vamos entrar no cdc-admin e depois, rodaremos a aplicação.

Alura-Azul:alberto alura$ cd cdc-admin/
Alura-Azul:cdc-admin alura$ npm start

> cdc-admin@0.1.0 start /Users/alura/Documents/alberto/cdc-admin
> react-scripts start
Após subi-la, o nosso projeto estará criado.

Welcome to React

Importante: O Facebook não criou uma ferramenta para ser customizável. Eles incluíram apenas o que acreditam ser suficiente para o desenvolvimento de uma aplicação. Então é necessário seguir alguma convenções.

Vamos abrir o cdc-admin no Sublime - você poderá utilizar outro editor de texto. Veremos que foi criada uma pasta chamada src, nela encontraremos o arquivo index.html com o código fonte.

Aula 1_index html

Este é um arquivo obrigatório. O servidor local que será configurado entende que o ponto de entrada da aplicação é o index.html. Não é possível modificar esta condição.

O código-fonte que chegará no navegador, terá incluído uma modificação no arquivo, ao inserir uma chamada para o arquivo JS gerada pelo webpack. Podemos ver isso na seguinte linha localizada no fim:

<script type="text/javascript" src="/static/js/bundle.js">
Dentro do arquivo bundle.js encontraremos o CSS, além diversas bibliotecas JS e as classes que serão usadas. Ele também assumirá que foi criado um arquivo chamado index.js, em que encontraremos código de ECMAScript 6.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
Nós veremos um pouco sobre o assunto, mas você encontrará mais sobre o assunto nos curso de JavaScript Avançado da Alura. Observe que encontraremos a informação de que o arquivo index.css foi importado. O responsável por disponibilizar isso é o Webpack.

Temos também um trecho com código do React:
```html
ReactDOM.render(
  <App />
  document.getElementById('root')
);
```
Nós veremos isso detalhadamente mais adiante. Outro ponto que iremos ver é o uso do JSX, um JavaScript que tem suporte a XML declarado dentro do código.

Então, esta é a estrutura que trabalharemos. O Hello World já está funcionando, entenderemos mais adiante o que foi feito e depois, iremos deixá-lo com a cara da nossa aplicação.

<h2>Um pouco de JSX e Babel</h2>
Já subimos a nossa aplicação, configurou o ambiente, falamos do Node.js e do npm. Também usamos o create-react-app para criar a nossa aplicação. Mas antes de começarmos a modificar o Hello World, vamos rever o que foi gerado, para não termos a impressão de que tudo foi criado magicamente.

Com o comando npm start vamos subir a aplicação. Ao usarmos o create-react-app, ele trouxe um servidor simples que subiu o nosso HTML rapidamente. Desta forma, tornou-se possível acessá-lo usando uma porta.

Outro ponto é que quando rodamos o npm start, ele executara um comando. Quando criamos um projeto que rodará dentro do Node e usa o npm, automaticamente, será gerado um arquivo chamado package.json que terá as explicações do seu projeto.
```
{
  "name": "cdc-admin",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.3.1"
  },
  "dependencies": {
    "react": "^15.3.1",
    "react-dom": "^15.3.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "built": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "./node_modules/react-scripts/config/eslint.js"
  }
}
```
Temos o nome do projeto, a versão, as dependências que declaramos do projeto. Iremos analisar uma propriedade do arquivo chamada scripts e dentro, uma que chama start. Quando executarmos npm start no Terminal, ele deve executar o comando react-scripts start.

O create-react-app criou a pasta node_modules e podemos ver que uma grande quantidade de itens foi configurado.

Node_module

Dentro da pasta da pasta react-script, encontraremos a bin, que quando selecionada, veremos react-scripts.js. O arquivo executará os comandos necessários para o create-react-app, podemos ver que ele chamará o node.
```
var result = spawn.sync(
  'node',
  [require.resolve('.../scripts/' + script)].concat(args),
  {stdio: 'inherit'}
);
```

Outro ponto que você deve observar está no arquivo index.js.
```
ReactDOM.render(
  <App />
  document.getElementById('root')
);
```
A linha <App /> é uma marcação XML, que se fosse simplesmente declarado no código JS não seria válido.

Com o React, nós escrevemos uma linguagem escrita sobre JS. Nós utilizamos a linguagem JSX que nos permite usar marcações XML.

JSX github

Porém, o seguinte trecho do App.jstambém não seria válido dentro de um componente do React.
```
  <div className="App">
    <div className="App-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
```
Precisamos conseguir transformar este código não válido, para outro em JS que seja aceito.

Babel j

O Babel que está é instalado juntamente com o create-react-app é o Babel, um compilador (ou um transpiler) de código fonte JavaScript.

Neste caso, ele pegará um código escrito com ECMAScript 6, que ainda só é exportada pelo Node.js, e irá suportar a sintaxe inválida do JS. Precisaremos usar o Babel, no entanto, na última versão do mesmo, ele vem puro. Isto significa que se você quer que as chamadas do JSX sejam convertidas em de React, precisaremos de um plugin do React chamado JSX transform. No site, vemos o exemplo de uma entrada e saída de um código:

Aula 1_Babel entrada e saida

Seria desanimador ter que escrever este código.

O Babel também nos ajudará a escrever classes, usando herança, graças aos imports da versão mais nova do JS.
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```
Nós podemos declarar uma biblioteca e importar os módulos expostos por esta. Todas estas features não funcionariam automaticamente dentro do Node.

Vamos conhecer a utilidade de outro plugin do Babel: ES2015 preset.

Aula 1_ES2015

Com ele, podemos fazer diversas conversões para versões antigas do JS. Este é outro plugin que já vem configurado com o create-react-app. Ele ainda possui um script que ficar verificando se existem falhas no nosso código. Veja o que aconteceria se esquecêssemos de fechar a <div>.

Aula 1_Failed to compile

Observe que ele apontou a falha de compilação no console.

Apenas esses benefícios já fariam valer a pena usar o create-react-app, porém, mais adiante conheceremos outros benefícios. Veremos como o seguintes imports serão suportados:
```
import logo from './logo.svg';
import './App.css';
```
Conheceremos bem o que é feito pelo framework e ver que as coisas não acontecem magicamente no nosso código.
