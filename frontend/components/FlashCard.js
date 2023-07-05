import {View, Text, TouchableOpacity} from "react-native"
import PanGestureHandler from 'react-native-gesture-handler'
const FlashCard = ({children, nextCard, activities, card}) => {
  
 
  return (
    <View style = {{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=> console.log('yay!')}>

            <Text>No</Text>

          </TouchableOpacity>

          <Text>{activities[card]}</Text>

          <TouchableOpacity onPress={nextCard}>
            <Text>Yes</Text>
          </TouchableOpacity>
    </View>
  )
}


export default FlashCard;