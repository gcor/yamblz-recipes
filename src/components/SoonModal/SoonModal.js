import React, { Component, PropTypes } from 'react'
import { View, Modal, Text, TouchableHighlight } from 'react-native'
import css from './SoonModal.css'

export default class SoonModal extends Component {
	render () {
		const {visible, toggleModal} = this.props
		const underlayColor = 'rgba(0,0,0,0.2)'
		return (
			<Modal animationType={'slide'} transparent visible={visible}
				onRequestClose={() => { this.setModalVisible(false) }}>
				<View style={css.modal}>
					<View style={css.modal__popup}>
						<Text style={css.modal__title}>Хотите узнавать о новых рецептах?</Text>
						<Text style={css.modal__text}>Разрешите отпралять вам уведомления.</Text>
						<View style={css.modal__buttons}>
							<TouchableHighlight
								onPress={toggleModal}
								underlayColor={underlayColor}>
								<Text style={[css.modal__button, {color: 'rgba(0,0,0,0.5)'}]}>НЕТ</Text>
							</TouchableHighlight>
							<TouchableHighlight style={{marginLeft: 32}}
								onPress={toggleModal}
								underlayColor={underlayColor}>
								<Text style={[css.modal__button, {color: 'black'}]}>ДА, СПАСИБО</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</Modal>
		)
	}
}

SoonModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired
}
