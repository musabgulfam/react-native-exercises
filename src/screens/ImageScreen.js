import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest" 
            imgUrl="../../assets/forest.jpg"
            score={8}
            />
            
            <ImageDetail 
            title="Beach" 
            imgUrl="../../assets/beach.jpg"
            score={9}
            />
            
            <ImageDetail 
            title="Mountain" 
            imgUrl="../../assets/mountain.jpg"
            score={10}
            />
        </View>
    );
}

const styles = StyleSheet.create();

export default ImageScreen;