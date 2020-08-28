import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    title: {
		marginTop: 50,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		textDecorationLine: 'underline',
		color: '#1C1C1C'
	},
	
	container: {
		flex: 1
	},
    
    text: {
        fontSize: 16,
        color: "black",
        fontWeight: "normal",
        paddingLeft: 25,
        paddingRight: 25,
	},
	
	buttonText: {
		color: 'white',
		fontWeight: '500'
	  },

    button: {
		marginHorizontal: 30,
		backgroundColor: "#228B22",
		borderRadius: 4,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
		marginTop: 20
	},

	link: {
        fontSize: 20,
		color: "blue",
		alignSelf:"center",
        fontWeight: "normal",
        paddingLeft: 25,
        paddingRight: 25,
    }
})