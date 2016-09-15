import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(0,0,0,1)', 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal__popup: {
        width: 280,
        height: 212,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 3
    },
    modal__title: {
        fontSize: 20,
        margin: 24,
        color: 'black',
        textAlign: 'center'
    },
    modal__text: {
        fontSize: 16,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
        color: 'black',
        textAlign: 'center'
    },
    modal__buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modal__button: {
        fontSize: 16
    }
})
