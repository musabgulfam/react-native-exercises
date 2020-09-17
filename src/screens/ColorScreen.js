import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    let [color, setColor] = useState([]);
    console.log(color);
    return (
        <View>
            <Button 
              title="Add color" 
              onPress={() => setColor([...color, randomRGB()])}
            />
            <FlatList 
              data={color}
              key={(item) => item}
              renderItem = {({ item }) => {
                return (
                    <View style={{ height: 100, width: 100, backgroundColor: item }} />
                )    
              }}
            />
        </View>
    );
}

const randomRGB = () => {
  const r = Math.floor(Math.random() * 256);

  const g = Math.floor(Math.random() * 256);
   
  const b = Math.floor(Math.random() * 256);
    
  return `rgb(${r}, ${g}, ${b})`
}

const style = StyleSheet.create({});

export default ColorScreen;