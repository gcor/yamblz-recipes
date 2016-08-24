import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import IngredientList from '../../components/IngredientList'

class RecipeView extends Component {
    render () {
        const recipe = {
            portions: 2,
            ingredients: [{
                title: 'Томаты'
            }, {
                title: 'Огурцы'
            }, {
                title: 'Сметана'
            }]
        }

        return (
            <ScrollView>
                <IngredientList recipe={recipe} />
            </ScrollView>
        )
    }
}

export default RecipeView