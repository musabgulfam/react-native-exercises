import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imgSource={require('../../assets/forest.jpg')}
                score={8}
            />
            
            <ImageDetail 
                title="Beach" 
                imgSource={require('../../assets/beach.jpg')}
                score={9}
            />
            
            <ImageDetail 
                title="Mountain" 
                imgSource={require('../../assets/mountain.jpg')}
                score={10}
            />
        </View>
    );
}

const styles = StyleSheet.create();

export default ImageScreen;