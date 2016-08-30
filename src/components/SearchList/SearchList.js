import React, { Component, PropTypes } from 'react'
import { Text, View, TextInput } from 'react-native'
import css from './SearchList.css'
import ui from '../../constants/css'

class SearchList extends Component {
	constructor (props) {
		super(props)
		this.state = { text: 'Useless Placeholder' }
	}
	render () {
		return (
			<View>
				<TextInput
					style={{marginTop: 30, height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				<View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
				</View>
				<View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
					<View>
						<Text></Text>
						<Text></Text>
					</View>
				</View>
			</View>
		)
	}
}

SearchList.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func
}

export default SearchList
