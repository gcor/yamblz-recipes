import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './RecipeItem.css'

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      recipeItemActions: ds.cloneWithRows(this.props.recipeItemData.actions)
		}
	}
  render () {
    return (
      <View style={css.recipeItem}>
        <View style={css.recipeItem__header}>
          <View style={css.recipeItem__step}>
            <Text style={css.recipeItem__step}>{this.props.recipeItemData.step}</Text>
          </View>
          <Text style={css.recipeItem__title}>{this.props.recipeItemData.title}</Text>
        </View>
        <View style={css.recipeItem__body}>
          <View style={css.recipeItem__img}></View>
        </View>
        <View style={css.recipeItem__footer}>
          <ListView
            dataSource={this.state.recipeItemActions}
            renderRow={this._renderActionItem}
          />
        </View>
      </View>
    )
  }
  _renderActionItem (rowData) {
    return (
      <View style={css.recipeItem__list}>
        <View style={css.recipeItem__listPoint}></View>
        <Text style={css.recipeItem__action}>{rowData}</Text>
      </View>
    )
  }
}

export default RecipeItem
