import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default function Comp(){
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
}

export function Comp1(){
    return <Text style={Estilo.txtG}>Comp #2</Text>
}

export function Comp2(){
    return <Text style={Estilo.txtG}>Comp #1</Text>
}

// export { Comp1, Comp2 
// export default Comp