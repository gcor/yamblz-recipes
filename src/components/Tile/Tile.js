import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import Thumbnail from '../Thumbnail/Thumbnail'
import css from './Tile.css'

export default class Tile extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(this.props.thumbnails)
		}
	}
	render() {
		return (
			<View style={css.tile}>
				<Text style={css.tile__title}>{this.props.title.toUpperCase()}</Text>
        		<ListView
        			contentContainerStyle={css.tile__list}
          			dataSource={this.state.dataSource}
          			renderRow={this._renderThumbnail}
        		/>
      		</View>
		)
	}
	_renderThumbnail(thumbnailData) {
		return (
			<Thumbnail
				data={thumbnailData}
				style={css.tile__item}
			/>
		)
	}
}
