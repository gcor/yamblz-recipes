import React, { Component } from 'react'
import { View, Text} from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'
import css from './Recipe.css'

class Recipe extends Component {
  render () {
    const recipeItemData = {
      title: "Почистите рыбу",
      actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
    }
    return (
      <RecipeItem data={recipeItemData} />
    )
  }
}

export default Recipe
