import React, {Component} from 'react'
import RecipeItem from '../RecipeItem/RecipeItem'

class Recipe extends Component {
  render () {
    const recipeItemData = [{
      step: 1,
      title: 'Почистите рыбу',
      actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
    }]
    return <RecipeItem recipeItemData={recipeItemData[0]}/>
  }
}

export default Recipe
