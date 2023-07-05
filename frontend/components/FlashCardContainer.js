import {View, Text, Animated, TouchableOpacity} from "react-native"
import FlashCard from "./FlashCard"
import PanGestureHandler from 'react-native-gesture-handler'
import { useState } from "react"
const FlashCardContainer = ({card, nextCard, activities,peopleNum}) => {

  return (
    <View style= {{ flex: 1, justifyContent: 'center'}} >
        <Animated.View>
        <FlashCard card={card} activities={activities} nextCard={nextCard}>

          

        </FlashCard>
      </Animated.View>
      
      
    </View>
  )
}


export default FlashCardContainer;