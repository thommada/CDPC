import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MyStack from './components/MyStack'

class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<MyStack/>
			</NavigationContainer>
		)
	}
}
export default App
