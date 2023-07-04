import {View, Text, Animated} from "react-native"
import FlashCard from "./FlashCard"
import PanGestureHandler from 'react-native-gesture-handler'
import { useState } from "react"
const FlashCardContainer = () => {
  const [card, setCard] = useState(0)
  const activities = [1,2,3,4,5]
  return (
    <View >
        <Animated.View>
      {activities.map(activity=>(
          <FlashCard activity={activity}/>
      ))}
      </Animated.View>
      
      
    </View>
  )
}


export default FlashCardContainer;