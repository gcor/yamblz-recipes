import React, { Component, PropTypes } from 'react';
import { Text, View, ListView } from 'react-native';
import css from './IngredientList.css';

export default class IngredientList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        
        this.state = {
            rowCount: this.props.recipe.ingredients.length,
            dataSource: ds.cloneWithRows(this.props.recipe.ingredients)
        }
    }
    render() {
        return (
            <View style={css.ingredients}>
                <View style={[css.ingredients__portions, css.portion]}>
                    <Text style={css.portion__title}> Порции </Text>
                    <Text style={css.portion__number}> {this.props.recipe.portions} </Text>
                </View>
                <View style={css.ingredients__listContainer}>
                    <ListView
                        style={css.ingredients__list}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderIngredient}
                    />
                </View>
            </View>
        )
    }
    _renderIngredient = (ingredient, sectionId, rowId) => {
        return (
            <View style={(rowId == this.state.rowCount - 1) ? [css.ingredients__listItem, css.ingredient, css.ingredients__listItem_last] 
                                                            : [css.ingredients__listItem, css.ingredient]}>
                <Text style={css.ingredient__title}> {ingredient.title} </Text>
            </View>
        )
    }
}
