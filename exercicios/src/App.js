import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from 'components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/Parimpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdNum={10} />
    {/*
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Victoria', email: 'Victoria@gmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'Claudia'}}/>
        <UsuarioLogado usuario={{email: 'edilene@gmail.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <Familia >
            <Membro nome="Victoria" sobrenome="Marques"/>
            <Membro nome="Ivan" sobrenome="Marques"/>
        </Familia>
        <Familia>
            <Membro nome="Victoria" sobrenome="Santos"/>
            <Membro nome="Ivan Victor" sobrenome="Santos"/>
            <Membro nome="Ivan" sobrenome="Santos"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar/>
        <ContadorV2/>
        <Pai/>
        <Contador inicial={100} incremento={2} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"></Titulo>
        <Aleatorio min={30} max={50}/>
        <MinMax min={3} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
