import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './AppBar.css'
import SearchIcon from './assets/search.png'
import BookmarkIcon from './assets/bookmark.png'


export default class AppBar extends Component {
    render () {
        const { pushToHistory, pushToSearch, pushToCategory } =  this.props
        return (
            <View style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginLeft: 16, marginRight: 16, marginTop: 32, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, height: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight style={{margin: 4}}  onPress={pushToHistory.bind(this)}>
                    <Image style={{height: 24, width: 24, resizeMode: 'contain'}} source={BookmarkIcon} />
                </TouchableHighlight>
                <TouchableHighlight onPress={pushToCategory.bind(this)}>
                    <View style={{paddingLeft: 16, paddingRight: 16, height: 36, 
                        alignItems: 'center', justifyContent: 'center', 
                        borderWidth: 2, borderStyle: 'solid', borderColor: 'white', 
                        borderRadius: 18,
                        backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        <Text style={{color: 'white', fontSize: 16 }}>Завтрак</Text>
                    </View> 
                </TouchableHighlight>
                <TouchableHighlight style={{margin: 4}} onPress={pushToSearch.bind(this)}>
                    <Image style={{height: 24, width: 24, resizeMode: 'contain'}} source={SearchIcon} />
                </TouchableHighlight>   
            </View>
        )
    }
}

AppBar.propTypes = {
    pushToHistory: PropTypes.func.isRequired,
    pushToSearch: PropTypes.func.isRequired,
    pushToCategory: PropTypes.func.isRequired
}