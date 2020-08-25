import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "whitesmoke",
    },
    boxtitle: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        
    },
    box: {
        flex: 6,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    title: {
        fontSize: 32,
        fontWeight: "200",
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "100",
    },
    itemtext: {
        fontSize: 18,
        fontWeight: "normal",
    }
})