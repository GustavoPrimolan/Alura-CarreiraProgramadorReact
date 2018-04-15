import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import BotaoSubmitCustomizado from './componentes/BotaoSubmitCustomizado';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

class FormularioAutor extends Component {

    constructor() {

        //SUPER É O CONSTRUCTOR DA CLASSE QUE ESTÁ SENDO HERDADA
        super();

        //SÓ PODE GUARDAR ESTADOS NO state, POIS É PADRÃO DO REACT
        this.state = { lista: [] };

        this.enviaForm = this.enviaForm.bind(this);
        /*
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
        */
        this.salveAlteracao = this.salvaAlteracao.bind(this);
    }

    //EVENTO DO REACT, NÃO O EVENTO DO DOM REAL
    enviaForm(evento) {
        evento.preventDefault();
        console.log("Dados sendo enviados");

        $.ajax({
            url: "http://cdc-react.herokuapp.com/api/autores",
            //COMO ESTÁ SENDO ENVIADO OS DADOS
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            //TRANSFORMA JSON EM STRING
            data: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha }),
            success: function (novaListagem) {
                console.log("Enviado com sucesso");
                //DISPARA UM AVISO GERAL DE novaListagem DISPONÍVEL
                //PRIMEIRO PARÂMETRO É O TÓPICO QUE EU QUERO ATUALIZAR 
                PubSub.publish('atualiza-lista-autores', novaListagem);
                this.setState({ nome: '', email: '', senha: '' });

            }.bind(this),
            error: function (resposta) {
                //3 IGUAIS COMPARA O TIPO TAMBÉM
                if (resposta.status === 400) {
                    new TratadorErros().publicaErros(resposta.responseJSON);
                }
            },
            beforeSend: function () {
                PubSub.publish("limpa-erros", {});
            }

        });

    }

    salvaAlteracao(nomeInput, evento){
        var campoSendoAlterado = {};
        campoSendoAlterado[nomeInput] = evento.target.value;
        //AS DUAS FORMAS ABAIXO ESTÃO CORRETAS
        this.setState(campoSendoAlterado);
        //this.setState({[nomeInput]: evento.target.value});
    }
    /*
    setNome(evento) {
        this.setState({ nome: evento.target.value });
    }

    setEmail(evento) {
        this.setState({ email: evento.target.value });
    }

    setSenha(evento) {
        this.setState({ senha: evento.target.value });
    }
    */
    render() {
        return (

            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                    <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this, 'nome')} label="Nome" />
                    <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.salvaAlteracao.bind(this, 'email')} label="Email" />
                    <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.salvaAlteracao.bind(this, 'senha')} label="Senha" />
                    <BotaoSubmitCustomizado label="Gravar" />
                </form>
            </div>
        );

    }

}

class TabelaAutores extends Component {



    render() {

        return (
            <div>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.lista.map(function (autor) {
                                return (
                                    <tr key={autor.id}>
                                        <td>{autor.nome}</td>
                                        <td>{autor.email}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>

        );

    }

}

export default class AutorBox extends Component {

    //CONSTRUTOR TEM COMO OBJETIVO INICIALIZAR ATRIBUTOS SIMPLES
    //O REACT OFERECE OUTRAS FUNÇÃO PARA SEREM EXECUTADAS EM CADA TEMPO DE VIDA
    constructor() {

        //SUPER É O CONSTRUCTOR DA CLASSE QUE ESTÁ SENDO HERDADA
        super();

        //SÓ PODE GUARDAR ESTADOS NO state, POIS É PADRÃO DO REACT
        this.state = { lista: [], nome: '', email: '', senha: '' };


    }

    //LOGO QUANDO O RENDER É INVOCADO, ESSE MÉTODO SERÁ EXECUTADO
    componentDidMount() {
        //ALÉM DO JQUERY PARA FAZER AS REQUISIÇÕES, EXISTE A FETCH QUE É OUTRA BIBLIOTECA
        //MELHOR PARA REQUISIÇÕES
        //FOI UTILIZADO O JQUERY POR SER MAIS FAMOSO
        $.ajax({
            url: "http://cdc-react.herokuapp.com/api/autores",
            dataType: 'json',
            success: function (resposta) {
                //SEMPRE QUANDO FOR EXECUTADO O MÉTODO setState
                //O RENDER VAI SER EXECUTADO NOVAMENTE DE FORMA ASSÍNCRONA
                this.setState({ lista: resposta });
            }.bind(this)
        });

        //SUBSCRIBE
        //PRIMEIRO PARÂMETRO DA FUNÇÃO ANONIMA É O NOME DO TÓPICO E A SEGUNDA E A O ITEM QUE SERÁ ATUALIZADO
        PubSub.subscribe('atualiza-lista-autores', function (topico, novaListagem) {
            this.setState({ lista: novaListagem });
        }.bind(this));
    }
    //ESSA FUNÇÃO É EXECUTADA ANTES DO RENDER
    componentWillMount() {

    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Cadastro de autores</h1>
                </div>
                <div className="content" id="content">
                    <FormularioAutor />
                    <TabelaAutores lista={this.state.lista} />
                </div>
            </div>
        );
    }

}