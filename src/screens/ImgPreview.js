import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import CustomCrop from "react-native-perspective-image-cropper";

import { useState } from 'react';
import CameraScreen from './CameraScreen';

const ImgPreview = ({navigation}) =>{
    let img = navigation.getParam('fil')
    // return(
    //     <View>
    //          <CustomCrop
    //             updateImage={this.updateImage.bind(this)}
    //             rectangleCoordinates={this.state.rectangleCoordinates}
    //             initialImage={this.state.initialImage}
    //             height={this.state.imageHeight}
    //             width={this.state.imageWidth}
    //             ref={ref => (this.customCrop = ref)}
    //             overlayColor="rgba(18,190,210, 1)"
    //             overlayStrokeColor="rgba(20,190,210, 1)"
    //             handlerColor="rgba(20,150,160, 1)"
    //             enablePanStrict={false}
    //     />
    //     </View>
    // )
    return(
        <View style={styles.body}>
            <Image source={{uri: img[0]}} style={{
                            position: 'relative',
                            top: img[2],
                            left: img[1],
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