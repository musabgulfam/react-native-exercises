import React, { useReducer } from 'react'
import { View, StyleSheet, Text , Button } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
    switch(action.colorToChange){
        case 'red' : 
            return ((state.red + action.amount) > 255 || (state.red + action.amount) < 0) ? state : { ...state, red: state.red + action.amount }
        case 'green' :
            return ((state.green + action.amount) > 255 || (state.green + action.amount) < 0) ? state : { ...state, green: state.green + action.amount }
        case 'blue' :  
            return ((state.blue + action.amount) > 255 || (state.blue + action.amount) < 0) ? state : { ...state, blue: state.blue + action.amount }
        default:
            return state;    
    }
} 

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    let {red, green, blue} = state;
    const COLOR_VARIABLE = 10;
    console.log(state);
    return (
        <View>
          <ColorCounter 
              color = "red" 
              onIncrease = { () => dispatch({colorToChange: 'red', amount: COLOR_VARIABLE})} 
              onDecrease = { () => dispatch({colorToChange: 'red', amount: -1 * COLOR_VARIABLE})}
          />
          <ColorCounter 
              color = "green" 
              onIncrease = { () =>  dispatch({colorToChange: 'green', amount: COLOR_VARIABLE})}
              onDecrease = { () =>  dispatch({colorToChange: 'green', amount: -1 * COLOR_VARIABLE})} 
          />
          <ColorCounter 
              color = "blue" 
              onIncrease = { () =>  dispatch({colorToChange: 'blue', amount: COLOR_VARIABLE})}
              onDecrease = { () =>  dispatch({colorToChange: 'blue' , amount: -1 * COLOR_VARIABLE})}
          />
          <View 
              style={{
                width: 150,
                height: 150,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
              }}
          />
          {/*<Button onPress={()=> {
              setRed(0);
              setGreen(0);
              setBlue(0);
            }}
        title="Set default" />*/}
        </View>
    );
}

const style = StyleSheet.create({});

export default SquareScreen;