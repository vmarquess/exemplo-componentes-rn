import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default (props) => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"

    }
})