import React, { useState } from 'react'
import { Text, Button, View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    let [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none' 
                autoCorrect={false} 
                value={name}
                onChangeText={(newText) => {
                    ( newText.length <= 5 ) ? <Text>Password must be longer than 5 charaters</Text> : setName(newText);
                }}
            />
            <Text>Password is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;