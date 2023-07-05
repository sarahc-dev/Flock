import {View, Text} from "react-native"
import PanGestureHandler from 'react-native-gesture-handler'
const FlashCard = ({children}) => {
 
  return (
    <View style = {{ flexDirection:'row', alignItems: 'stretch'}}>
        {children}
    </View>
  )
}


export default FlashCard;