import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

import { useState } from 'react';
import CameraScreen from './CameraScreen';

const ImgPreview = ({navigation}) =>{
    let img = navigation.getParam('fil')
    return(
        <View style={styles.body}>
            <Image source={{uri: img[0]}} style={{
                            position: 'relative',
                            top: img[1],
                            left: img[2],
                            width: '100%',
                            height: '100%',}}
                            />
            <Button title='Save'/>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'black', 
    },
})

export default ImgPreview
