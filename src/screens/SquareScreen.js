import React, { useState } from 'react'
import { View, StyleSheet, Text , Button } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const SquareScreen = () => {
    let [red, setRed] = useState(0);
    let [green, setGreen] = useState(0);
    let [blue, setBlue] = useState(0);
    console.log(red);
    console.log(green);
    console.log(blue);
    const setColor = (color, change)  => {
        switch(color){
            case 'red' : {
                (red + change > 255 || red + change < 0) ? null : setRed(red + change); 
                return;
            }
            case 'blue' : {
                (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change); 
                return;
            }
            case 'green' : {
                (green + change > 255 || green + change < 0) ? null : setGreen(green + change); 
                return;
            }
            default:
                return;
        }
    }
    return (
        <View>
          <ColorCounter 
              color = "red" 
              onIncrease = { () => setColor('red', 10) } 
              onDecrease = { () => setColor('red', -10) }
          />
          <ColorCounter 
              color = "green" 
              onIncrease = { () => setColor('green', 10) }
              onDecrease = { () => setColor('green', -10) } 
          />
          <ColorCounter 
              color = "blue" 
              onIncrease = { () => setColor('blue', 10) }
              onDecrease = { () => setColor('blue', -10) }
          />
          <View 
              style={{
                width: 150,
                height: 150,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
              }}
          />
          <Button onPress={()=> {
              setRed(0);
              setGreen(0);
              setBlue(0);
            }}
            title="Set default" />
        </View>
    );
}

const style = StyleSheet.create({});

export default SquareScreen;