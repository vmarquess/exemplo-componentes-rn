import React from 'react'
import {Text} from 'react-native'
export default (props) => {
    return (
        <>
            <Text>[Inicio] Membros da Familia!:</Text>
           {props.children}
            <Text>[Fim] Membros da Familia!</Text>
        </>
    )
}