import React from 'react'
import { Button } from 'react-native'

export default () => {

   const executar = () => {
        console.warn("Pressionado #01!!")
    }
    
    return (
        <>
            <Button
                title="Executar #01!"
                onPress={executar}  
            />
            <Button
                title="Executar #02!"
                onPress={function(){
                    console.warn("Pressionado #02!!")
                }}  
            />
            <Button
                title="Executar #02!"
                onPress={() => console.warn("Pressionado #03!!")}  
            />
        </>
    )
}
