import React, {Component} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero'

export default class Mega extends Component {
    state = {
      qtdNum: this.props.qtdNum,
      numeros: [],
    };

    setQtdNum = qtd => {
      // + = transforma string em valor numerico
      this.setState({qtdNum: +qtd});
    };

    // gera numero aleatorio que não esteja contido no array de numeros
    getRandom = (min, max, nums) => {
      const novo = parseInt(Math.random() * max) + min;
      return nums.includes(novo) ? this.getRandom(min, max, nums) : novo;
    };

    gerarNumeros = () => {
      const numeros = Array(this.state.qtdNum).fill().reduce(n => [...n, this.getRandom(1, 60, n)],[]).sort((a,b) => a - b)
      this.setState({numeros});
    };

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map( num => {
          return <MegaNumero key={num} num={num}/>
        })
    }

    render() {
      return (
        <>
          <Text style={Estilo.txtG}>
              Gerador de Mega-Sena: {this.state.qtdNum}
          </Text>
          <TextInput
              keyboardType={'numeric'}
              style={{borderBottomWidth: 1}}
              placeholder="Qtde de Números"
              value={`${this.state.qtdNum}`}
              onChangeText={this.setQtdNum}
          />
          <Button 
              title='Gerar' 
              onPress={this.gerarNumeros}>
          </Button>
          <View style={{
              marginTop: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
          }}>
              {this.exibirNumeros()}
          </View>
        </>
      );
    }
}

// gerarNumeros2 = () => {
//   const { qtdNum } = this.state
//   const numeros = []
//   for(let i=0;i<qtdNum;i++){
//     numeros.push(getRandom(1,60,numeros))
//   }
//   numeros.sort((a,b) => a - b)
//   this.setState({numeros});
// }
