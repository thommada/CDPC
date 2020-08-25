import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    greetingLogin: {
        marginBottom: 50,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    greetingRegister: {
        marginTop: 32,
        marginBottom: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    inputTitle: {
        color: "#131416",
        fontSize: 16,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#228B22",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    },
    logo: {
        alignSelf: "center",
        height: 180,
        width: 180,
        marginTop: 25
    },
    text: {
        color: '#8A8F9E',
        fontSize: 13
    },
    registerText: {
        color: '#228B22',
        fontWeight: '500'
    }
})