import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    switch(action.type){
        case 'increase' : {
            return { ...state, count: state.count + action.amount };
        }
        case 'decrease' : {
            return { ...state, count: state.count - action.amount };
        }
    }
}

const CounterScreen = () => {
    const [state, dispatch]  = useReducer(reducer, {count: 0});
    const INCR_VAL = 10;
    console.log(`type of dispatch is ${typeof dispatch}`);
    let {count} = state;
    console.log(`Value of count is ${count}, and type is ${typeof(count)}`)
    return (
        <View>
            <Button title="Increase" onPress={ () => dispatch({type: 'increase', amount: INCR_VAL})}/>
            <Button title="Decrease" onPress={ () => dispatch({type: 'decrease', amount: INCR_VAL})}/>
            <Text>Current Count: {count}</Text>
        </View>
    );
}

const style = StyleSheet.create(
    {}
);

export default CounterScreen;