import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
	recipe__image: {
		height: Dimensions.get('window').height * 0.5
	},
    recipe__background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    recipe__gradient1: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 239,
        opacity: 0.2
    },
    recipe__gradient2: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 128
    }
})
