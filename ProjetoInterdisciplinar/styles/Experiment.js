import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		marginTop: 50,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		textDecorationLine: 'underline',
		color: '#1C1C1C'
	},
	subtitle: {
		fontWeight: 'bold',
		fontSize: 22,
		marginTop: 20,
		color: '#1C1C1C'
	},
	text: {
		fontSize: 16,
		textAlign: 'justify',
		color: '#363636'
	},
	textPDF: {
		fontSize: 16,
		textAlign: 'justify',
		color: '#0000CD'
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
	buttonText: {
		color: 'white',
		fontWeight: '500'
	}
})