import React, { Component } from 'react'
import { ScrollView, Text, View, ListView } from 'react-native'
import css from './RecipeItem.css'
import listCSS from '../List/List.css.js'

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
      <ScrollView style={css.recipeItem}>
        <View style={css.recipeItem__header}>
          <View style={css.recipeItem__step}>
            <Text style={css.recipeItem__stepValue}>{this.props.recipeItemData.step}</Text>
          </View>
          <Text style={css.recipeItem__title}>{this.props.recipeItemData.title}</Text>
        </View>
        <View style={css.recipeItem__body}>
          <View style={css.recipeItem__img}></View>
        </View>
        <View style={css.recipeItem__footer}>
          <ListView
            style={listCSS.list}
            dataSource={this.state.recipeItemActions}
            renderRow={this._renderActionItem}
          />
        </View>
      </ScrollView>
    )
  }
  _renderActionItem (rowData) {
    return (
      <View style={listCSS.item}>
        <View style={listCSS.item__point}></View>
        <Text style={listCSS.item__value}>{rowData}</Text>
      </View>
    )
  }
}

export default RecipeItem
