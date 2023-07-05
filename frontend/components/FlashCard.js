import {View, Text, TouchableOpacity} from "react-native"
import PanGestureHandler from 'react-native-gesture-handler'
const FlashCard = ({children, style, activities, card}) => {
 
  return (
    <View style = {{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity >

            <Text>No</Text>

          </TouchableOpacity>

          <Text>{activities[card]}</Text>

          <TouchableOpacity>
            <Text>Yes</Text>
          </TouchableOpacity>
    </View>
  )
}


export default FlashCard;