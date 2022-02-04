import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'

export default ({inicial=0, incremento=1}) =>{

    const [numero, setNumero] = useState(inicial)
    
    const inc = () => setNumero(numero + incremento)
    const dec = () => setNumero(numero - incremento)

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}