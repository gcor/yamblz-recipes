import { StyleSheet } from 'react-native';
import ui from '../../constants/css'

export default StyleSheet.create({
    button: {
        backgroundColor: ui.yellow,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button_text_center: {
        justifyContent: 'center'
    },
    button__icon: {
        width: 18,
        height: 18,
        backgroundColor: 'slategray',
        marginLeft: 15,
        marginRight: 15
    },
    button__text: {
        color: 'black',
        fontSize: 16
    },
});