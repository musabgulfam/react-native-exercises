import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Button 
      title = "Beep beep"/>
      onPress = {() => props.navigation.navigate('List')}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
