import {View, Text} from "react-native"
import PanGestureHandler from 'react-native-gesture-handler'
const FlashCard = ({activity}) => {
 
  return (
    <View>
        <Text>{activity}</Text>
    </View>
  )
}


export default FlashCard;