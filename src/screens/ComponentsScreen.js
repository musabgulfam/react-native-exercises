import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    let name = 'Musab';
    return (
      <View>
        <Text style={styles.text1}>Getting started with react-native</Text>
        <Text style={styles.text2}>My name is {name}</Text>
      </View>
    );
}

const styles = StyleSheet.react({
    text1: {
        fontSize: 45
    },
    text2: {
        fontSize: 20
    }
});

export default ComponentsScreen;