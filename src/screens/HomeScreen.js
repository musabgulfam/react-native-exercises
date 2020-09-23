import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Button 
        title = "Component demo"
        onPress = {() => props.navigation.navigate('Components')}
      />
      <Button 
        title = "Image demo"
        onPress = {() => props.navigation.navigate('Image')}
      />
      {/*<Button 
        title = "Beep beep"
        onPress = {() => props.navigation.navigate('List')}
      />*/}
      <Button 
        title = "Go to counter (with reducer) demo"
        onPress = {() => props.navigation.navigate('Counter')}
      />
      <Button 
        title = "Go to color demo"
        onPress = {() => props.navigation.navigate('Color')}
      />
      <Button 
        title = "Square screen demo"
        onPress = {() => props.navigation.navigate('Square')}
      />
      <Button 
        title = "Text screen demo"
        onPress = {() => props.navigation.navigate('Text')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;