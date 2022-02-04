import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ( {min, max} ) => (
        <Text style={Estilo.txtG}>O número aleatório entre {min} e {max} é {getRandom(min,max)}</Text>
)


function getRandom(min, max) {

  return parseInt(Math.random() * (max - min + 1) + min);

}