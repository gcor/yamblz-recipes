import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Tab from '../Tab'
import IngredientList from '../IngredientList'
import css from './RecipeTabs.css'

class RecipeTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 'products'};
  }

  changeTo(tab) {
    this.setState({
      activeTab: tab
    })
  }

  _renderTab() {
    switch (this.state.activeTab) {
      case 'stages':
        return (<View><Text>Тут будут этапы, когда допилим</Text></View>);
      case 'products':
        return (<IngredientList recipe={this.props.recipe}/>);
    }
  }

  render() {
    return (
      <View>
        <View style={css.tabs}>
          <Tab
            style={[css.tabs__item, this.state.activeTab === 'stages' ? css.tabs__item_active : '']}
            onPress={this.changeTo.bind(this, 'stages')}
            textStyle={css.tabs__itemText}
            tabTitle={'ЭТАПЫ'}
          />
          <Tab
            style={[css.tabs__item, this.state.activeTab === 'products' ? css.tabs__item_active : '']}
            onPress={this.changeTo.bind(this, 'products')}
            textStyle={css.tabs__itemText}
            tabTitle={'ПРОДУКТЫ'}
          />
        </View>
        {this._renderTab()}
      </View>
    )
  }
}

export default RecipeTabs
