import React from 'react'
import { RNCamera } from 'react-native-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { DragResizeBlock, DragResizeContainer } from "react-native-drag-resize";

let CameraScreen = ({navigation}) =>{
    const [resize, setResize] = useState([100, 0])
    console.log(resize)
    const takePicture = async () => {
          let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
          }
          const data = await this.camera.takePictureAsync(options);
          let fil = [data.uri, resize[0], resize[1]]
          navigation.navigate('imgprv', {fil})
        }

      

    return (
    <View style={styles.container}>
    <View>
    <DragResizeBlock
      x={resize[0]}
      y={resize[1]}
      w={50}
      h={50}
      onResize={(value) => setResize(value)}>
      <View
        style={{
          width: "100%",
          height: "100%",
          borderWidth: 2,
          borderColor: 'black'
        }}
      />
    </DragResizeBlock>
    </View>
    <RNCamera style={{flex:1}} ref={ref => {this.camera = ref;}}
    captureAudio={false}
    style={{flex:1}}
    type={RNCamera.Constants.Type.back}
    androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
    }}
    />
    <Button title='capture' onPress={takePicture}/>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }
  })

export default CameraScreen
