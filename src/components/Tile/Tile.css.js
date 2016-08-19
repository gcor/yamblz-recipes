import { StyleSheet, Dimensions } from 'react-native';
import ui from '../../constants/css'

export default StyleSheet.create({
    tile: {
        backgroundColor: 'skyblue'
    },
    tile__title: {
        fontSize: ui.fontXS,
        color: ui.gray,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 25
    },
    tile__list: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tile__item: {
        width: Dimensions.get('window').width * 0.50,
        paddingBottom: Dimensions.get('window').width * 0.50
    }
});
