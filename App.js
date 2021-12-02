import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import CameraScreen from './src/screens/CameraScreen'
import ImgPreview from './src/screens/ImgPreview'

const navigator = createStackNavigator(
  {
    Home: CameraScreen,
    imgprv: ImgPreview,
  },
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "My App",
       headerStyle: {
      backgroundColor: '#222222',
    },
    headerTitleStyle: {
     color: 'white'
    }
  }
}
  )


export default createAppContainer(navigator)