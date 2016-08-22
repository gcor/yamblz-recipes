import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, TouchableHighlight } from 'react-native'
import Thumbnail from '../Thumbnail/Thumbnail'
import css from './Tile.css'

class Tile extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: ds.cloneWithRows(this.props.thumbnails)
		}
	}

	_onPressHandler () {
		this.props.navigatePush('Recipe')
	}

	render () {
		return (
			<TouchableHighlight onPress={this._onPressHandler.bind(this)}>
				<View style={css.tile}>
					<Text style={css.tile__title}>{this.props.title.toUpperCase()}</Text>
					<ListView
						contentContainerStyle={css.tile__list}
						dataSource={this.state.dataSource}
						renderRow={this._renderThumbnail}
					/>
				</View>
			</TouchableHighlight>
		)
	}
	_renderThumbnail (thumbnailData) {
		return (
			<Thumbnail
				data={thumbnailData}
				style={css.tile__item}
			/>
		)
	}
}

Tile.propTypes = {
	thumbnails: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	navigatePush: PropTypes.func.isRequired
}

export default Tile
