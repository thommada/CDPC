import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "whitesmoke"
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#228B22",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 15
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
  }
})
