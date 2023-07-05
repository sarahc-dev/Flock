import {View, Text, Animated, TouchableOpacity} from "react-native"
import FlashCard from "./FlashCard"
import PanGestureHandler from 'react-native-gesture-handler'
import { useState } from "react"
const FlashCardContainer = () => {
  const [card, setCard] = useState(0)
  const peopleNum = 2
  const activities = [1,2,3,4,5]
  return (
    <View >
        <Animated.View>
        <FlashCard style={{ }}>

          <TouchableOpacity >

            <Text>No</Text>

          </TouchableOpacity>

          <Text>{activities[card]}</Text>

          <TouchableOpacity>
            <Text>Yes</Text>
          </TouchableOpacity>

        </FlashCard>
      </Animated.View>
      
      
    </View>
  )
}


export default FlashCardContainer;