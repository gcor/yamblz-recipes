import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
  recipeItem: {
    backgroundColor: 'white',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  recipeItem__header: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  recipeItem__step: {
    backgroundColor: ui.yellow,
    paddingLeft: 25,
    paddingRight: 10,
    justifyContent: 'center',
    marginRight: 20,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100
  },
  recipeItem__stepValue: {
    fontSize: ui.fontS,
    color: 'black'
  },
  recipeItem__title: {
    fontSize: ui.fontL,
    color: 'black'
  },
  recipeItem__body: {},
  recipeItem__img: {
    backgroundColor: 'silver',
    height: 200
  },
  recipeItem__footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})
