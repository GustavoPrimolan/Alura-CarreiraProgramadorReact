-------------------------------------------------------------------------
<h1>Se��o 01 - Criando e configurando o projeto</h1>

<h2>Explica��o do Projeto</h2>
Bem-vindo ao curso de React. Meu nome � Alberto Souza, vou estar com voc�s apresentando este Framework t�o famoso no mundo JavaScript.

Voc� pode se perguntar: "Por que eu vou usar o React?". A grande vantagem � que ao us�-lo, voc� facilitar� a constru��o, a manipula��o e a atualiza��o do estado da sua tela.

Cadastro de livro

Nosso projeto ter� um cadastro com dois cruds, um de "Autores" e outro de "Livros".

Neste primeiro curso, veremos o b�sico do React para que depois voc� consiga criar as suas aplica��es. Nos pr�ximos cursos veremos as tecnologias adjacentes a esse Framework - que foi criado pelo Facebook e � focado em construir uma View.

Veremos como construir a seguinte tela.

Autores

Ap�s preenchermos os campos e enviarmos os dados, o estado ficar� em branco novamente e a tabela abaixo ser� atualizada.

Autores II

S�o recursos que podem ser �teis em aplica��es de dashboard, por exemplo, em que muitos elementos podem ser atualizados na tela. O React facilitar� a nossa vida!

Precisaremos realizar a��es semelhantes na p�gina de cadastro de livros.

Livros

A nossa aplica��o ser� composta por uma �nica tela, ap�s carregarmos o arquivo index.html, a partir dali n�o daremos mais reload. Isto � o que chamamos de Single Page Applicantion (SPA), que s�o aplica��es com uma �nica p�gina.

Nossa recomenda��o � que neste curso, voc� foque em aprender o b�sico de React, a navega��o, a comunica��o entre os componentes e aproveitar bem o que o Framework te oferece. N�o se preocupe em conhecer os v�rios frameworks adjacentes, vamos aprender primeiramente o que � essencial.

A nossa aplica��o do Front-End ir� consumir informa��es do Back-end, sendo est� outra vantagem do React.

N�s vamos disponibilizar um arquivo .jar, que contem o projeto em Java j� pronto e voc� poder� execut�-lo na sua m�quina.

Ao rodarmos localmente, n�o veremos os dados dos outros alunos e teremos a garantia de que a aplica��o estar� no ar. Voc� encontrar� explica��es mais detalhadas aqui!

Com a API pronta poderemos cadastrar os autores e livros.

Espero que voc� embarque nesta aventura e aprenda como trabalhar com o Framework mais famoso do mercado JavaScript atualmente. Ele � bastante �til!

Assista aos v�deos e resolva os exerc�cios, caso tenha alguma d�vida, acesse o nosso f�rum.

Mais adiante, veremos como fazer as instala��es necess�rios para que a aplica��o funcione e para que seja poss�vel rodar o React.

<h2>Configura��o ambiente</h2>

Vimos como ser� nossa aplica��o, agora montaremos o ambiente inicial para termos o "Hello World" funcionando.

Eu aconselho que voc� fa�a o download do arquivo JAR e rod�-lo sempre localmente. Pode ser que a aplica��o saia do ar em algum momento e voc� n�o ficar� dependente do nosso suporte.

Primeiramente, vamos fazer funcionar o React vers�o para Front-End.

O React � uma biblioteca do Facebook e podemos baix�-lo no seu Github.

React Download

Qual foi a motiva��o do Facebook para criar o React? N�s queremos manter ou alterar o estado dos componentes da nossa aplica��o. Mas no Facebook, eles precisam trabalhar com diferente notifica��es no menu visualizado pelo usu�rio.

Aula1_Menu Facebook

Eles precisam gerenciar muita coisa na tela e o React � �timo para isto!

�s vezes tamb�m o time precisa trabalhar com diferentes pontos de acesso do Back-End, n�o � necess�rio criar tr�s aplica��es diferentes. Voc� criar� uma que devolve um formato de dados que pode ser lido por diferentes aplica��es. Por exemplo, no nosso caso estamos retornando um JSON.

Json

Com este formato, podemos consumi-lo em uma aplica��o Android ou iOS, por exemplo, ambas criadas com o React. Quando trabalhamos com JSON - um formato bastante conhecido - voc� tem a op��o de trabalhar com diferentes clientes.

Em seguida, vamos come�ar a montar a nossa configura��o. � poss�vel baixar manualmente o React vers�o 15.3.1..

Download React2

Voc� tem a op��o de fazer o download do react.js (com a core do framework) e react-dom (que permite manipular os elementos da p�gina).

No entanto, no curso iremos seguir o que o Facebook nos sugeriu fazer: eles criaram um projeto que se chama create-react-app e que nos permite criar uma aplica��o com React muito rapidamente. Com ele n�o precisaremos nos preocupar com as configura��es do React. �s vezes voc� tem o interesse de trabalhar com ECMAScript 6 ou um transpiler.

Neste curso, consideramos que voc� j� tem um conhecimento de JavaScript. Recomendamos que voc� fa�a tamb�m o curso de JavaScript Avan�ado I<), voc� pode aprender mais sobre ECMAScript 6.

Para que o usu�rio n�o se precisasse se preocupar com isso, tudo j� foi configurado . No fim do curso, temos um v�deo em que veremos como instalar o React e fazer as configura��es manualmente.

Ent�o, eu recomendo que voc� tenha o create-react-app para seguirmos.

Este � um projeto com um c�digo JavaScript de Back-End escrito do lado do servidor, por isso, precisaremos ter instalado tamb�m o Node.js, vers�es posteriores � vers�o 4 LTS.

Node.js

Se j� tivermos instalado, podemos descobrir qual vers�o estamos usando o comando node -v. Na minha m�quina, eu estou usando a vers�o v4.2.3.

Alura-Azul:alberto alura$ node - v
v4.2.3
Alura-Azul:alberto alura$
Precisaremos do Node para usarmos o create-react-app, n�o iremos desenvolver efetivamente uma aplica��o de back-end com JavaScript.

Voc� encontrar� os passos para a instala��o do Node.js clicando aqui.

Com o Node.js instalado, faremos um teste no terminal se ele foi instalado e se o npm - a ferramenta de execu��o de script prontos - est� dispon�vel.

Alura-Azul:alberto alura$ node - v
v4.2.3
Alura-Azul:alberto alura$ npm -v
3.8.3
Com os dois instalados, chegou o momento de adicionarmos o create-react-app.

create-react-app

Vemos que devemos escrever a seguinte linha no terminal:

npm install -g create-react-app
O -g gera uma instala��o global na sua m�quina. Mas eu segui uma outra op��o, criei um pasta chamada alberto e vou us�-la como inicio dos c�digo JavaScript. Para instala��o, vou usar o seguinte comando:

Alura-Azul:alberto alura$ npm -v
3.8.3
Alura-Azul:alberto alura$ pwd
/Users/alura/Documents/alberto
Alura-Azul:alberto alura$ npm install create-react-app
Ent�o, o create-react-app ser� instalado. Ap�s a instala��o, ser� criada a pasta node_modules e dentro dela, a pasta .bin.

Aula 1_Instala��o Node

Depois, vamos adicionar a seguinte linha:

Alura-Azul:alberto alura$ ./node_modules/.bin/create-react-app
Estamos fazendo desta forma, porque n�o fizemos a instala��o global. Se o -g foi usado anteriormente, voc� rodar� apenas o create-react-app.

Alura-Azul:alberto alura$ create-react-app
Meu conselho � que voc� fa�a com o .bin forma, porque desta forma voc� ter� controle do create-react-app usada e n�o precisar� em ficar atualizando essa informa��o.

Agora, criaremos o cdc-admin.

Alura-Azul:alberto alura$ ./node_modules/.bin/create-react-app cdc-admin
Ser� feita a instala��o de todas as deped�ncias que o create-react-app far� o download. J� vir� o Babel, WebPack. Agora, se precisamos usar o c�digo de ECMAScript 6, que n�o funcionar� no navegador, teremos que ter o suporte dentro do Node.js. N�s precisamos que o c�digo seja transcrita para uma vers�o que o Node suporte - neste ponto, ser� �til o Babel, que ser� o respons�vel por fazer esta compila��o. Por�m, ele ir� gerar um c�digo final que ter� um monte de coisas de Back-End e JavaScript. Ele ent�o, precisar� do WebPack. A configura��o n�o � algo trivial. Ela tomar� bastante tempo, ent�o, ao eliminar esta parte do processo, o React facilitar� bastante.

Ap�s alguns minutos de instala��o, ser� criado um servidor local para voc� subir sua aplica��o JavaScript,

Aula 1_instala��o react 2

Voc� tamb�m ter� a op��o de empacotar a aplica��o para disponibiliz�-la para o deploy.

Vamos entrar no cdc-admin e depois, rodaremos a aplica��o.

Alura-Azul:alberto alura$ cd cdc-admin/
Alura-Azul:cdc-admin alura$ npm start

> cdc-admin@0.1.0 start /Users/alura/Documents/alberto/cdc-admin
> react-scripts start
Ap�s subi-la, o nosso projeto estar� criado.

Welcome to React

Importante: O Facebook n�o criou uma ferramenta para ser customiz�vel. Eles inclu�ram apenas o que acreditam ser suficiente para o desenvolvimento de uma aplica��o. Ent�o � necess�rio seguir alguma conven��es.

Vamos abrir o cdc-admin no Sublime - voc� poder� utilizar outro editor de texto. Veremos que foi criada uma pasta chamada src, nela encontraremos o arquivo index.html com o c�digo fonte.

Aula 1_index html

Este � um arquivo obrigat�rio. O servidor local que ser� configurado entende que o ponto de entrada da aplica��o � o index.html. N�o � poss�vel modificar esta condi��o.

O c�digo-fonte que chegar� no navegador, ter� inclu�do uma modifica��o no arquivo, ao inserir uma chamada para o arquivo JS gerada pelo webpack. Podemos ver isso na seguinte linha localizada no fim:

<script type="text/javascript" src="/static/js/bundle.js">
Dentro do arquivo bundle.js encontraremos o CSS, al�m diversas bibliotecas JS e as classes que ser�o usadas. Ele tamb�m assumir� que foi criado um arquivo chamado index.js, em que encontraremos c�digo de ECMAScript 6.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
N�s veremos um pouco sobre o assunto, mas voc� encontrar� mais sobre o assunto nos curso de JavaScript Avan�ado da Alura. Observe que encontraremos a informa��o de que o arquivo index.css foi importado. O respons�vel por disponibilizar isso � o Webpack.

Temos tamb�m um trecho com c�digo do React:
```html
ReactDOM.render(
  <App />
  document.getElementById('root')
);
```
N�s veremos isso detalhadamente mais adiante. Outro ponto que iremos ver � o uso do JSX, um JavaScript que tem suporte a XML declarado dentro do c�digo.

Ent�o, esta � a estrutura que trabalharemos. O Hello World j� est� funcionando, entenderemos mais adiante o que foi feito e depois, iremos deix�-lo com a cara da nossa aplica��o.

<h2>Um pouco de JSX e Babel</h2>
J� subimos a nossa aplica��o, configurou o ambiente, falamos do Node.js e do npm. Tamb�m usamos o create-react-app para criar a nossa aplica��o. Mas antes de come�armos a modificar o Hello World, vamos rever o que foi gerado, para n�o termos a impress�o de que tudo foi criado magicamente.

Com o comando npm start vamos subir a aplica��o. Ao usarmos o create-react-app, ele trouxe um servidor simples que subiu o nosso HTML rapidamente. Desta forma, tornou-se poss�vel acess�-lo usando uma porta.

Outro ponto � que quando rodamos o npm start, ele executara um comando. Quando criamos um projeto que rodar� dentro do Node e usa o npm, automaticamente, ser� gerado um arquivo chamado package.json que ter� as explica��es do seu projeto.
```html
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
Temos o nome do projeto, a vers�o, as depend�ncias que declaramos do projeto. Iremos analisar uma propriedade do arquivo chamada scripts e dentro, uma que chama start. Quando executarmos npm start no Terminal, ele deve executar o comando react-scripts start.

O create-react-app criou a pasta node_modules e podemos ver que uma grande quantidade de itens foi configurado.

Node_module

Dentro da pasta da pasta react-script, encontraremos a bin, que quando selecionada, veremos react-scripts.js. O arquivo executar� os comandos necess�rios para o create-react-app, podemos ver que ele chamar� o node.
```html
var result = spawn.sync(
  'node',
  [require.resolve('.../scripts/' + script)].concat(args),
  {stdio: 'inherit'}
);
```
Outro ponto que voc� deve observar est� no arquivo index.js.
```html
ReactDOM.render(
  <App />
  document.getElementById('root')
);
```
A linha <App /> � uma marca��o XML, que se fosse simplesmente declarado no c�digo JS n�o seria v�lido.

Com o React, n�s escrevemos uma linguagem escrita sobre JS. N�s utilizamos a linguagem JSX que nos permite usar marca��es XML.

JSX github

Por�m, o seguinte trecho do App.jstamb�m n�o seria v�lido dentro de um componente do React.
```html
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
Precisamos conseguir transformar este c�digo n�o v�lido, para outro em JS que seja aceito.

Babel j

O Babel que est� � instalado juntamente com o create-react-app � o Babel, um compilador (ou um transpiler) de c�digo fonte JavaScript.

Neste caso, ele pegar� um c�digo escrito com ECMAScript 6, que ainda s� � exportada pelo Node.js, e ir� suportar a sintaxe inv�lida do JS. Precisaremos usar o Babel, no entanto, na �ltima vers�o do mesmo, ele vem puro. Isto significa que se voc� quer que as chamadas do JSX sejam convertidas em de React, precisaremos de um plugin do React chamado JSX transform. No site, vemos o exemplo de uma entrada e sa�da de um c�digo:

Aula 1_Babel entrada e saida

Seria desanimador ter que escrever este c�digo.

O Babel tamb�m nos ajudar� a escrever classes, usando heran�a, gra�as aos imports da vers�o mais nova do JS.
```html
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
N�s podemos declarar uma biblioteca e importar os m�dulos expostos por esta. Todas estas features n�o funcionariam automaticamente dentro do Node.

Vamos conhecer a utilidade de outro plugin do Babel: ES2015 preset.

Aula 1_ES2015

Com ele, podemos fazer diversas convers�es para vers�es antigas do JS. Este � outro plugin que j� vem configurado com o create-react-app. Ele ainda possui um script que ficar verificando se existem falhas no nosso c�digo. Veja o que aconteceria se esquec�ssemos de fechar a <div>.

Aula 1_Failed to compile

Observe que ele apontou a falha de compila��o no console.

Apenas esses benef�cios j� fariam valer a pena usar o create-react-app, por�m, mais adiante conheceremos outros benef�cios. Veremos como o seguintes imports ser�o suportados:
```html
import logo from './logo.svg';
import './App.css';
```
Conheceremos bem o que � feito pelo framework e ver que as coisas n�o acontecem magicamente no nosso c�digo.