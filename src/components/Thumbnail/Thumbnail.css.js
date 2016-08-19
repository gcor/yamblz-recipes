import { StyleSheet, Dimensions } from 'react-native';
import ui from '../../constants/css'

export default StyleSheet.create({
    thumbnail: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    thumbnail__image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        backgroundColor: 'lightgreen',
        position: 'absolute',
        left: 0
    },
    thumbnail__title: {
        fontSize: ui.fontL,
        fontWeight: 'bold',
        color: 'white'
    },
    thumbnail__description: {
        margin: 15,
        zIndex: 1
    },
    thumbnail__text: {
        color: 'white'
    }
});