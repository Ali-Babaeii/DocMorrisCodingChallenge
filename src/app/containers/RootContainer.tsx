import styles from '@containers/styles'
import AppNavigator from '@navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from '@themes/variables/ThemeProvider'
import React from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootContainer = (): JSX.Element => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<StatusBar
					barStyle={theme.statusBarDefault as StatusBarStyle}
					backgroundColor={theme.brandPrimary}
					animated
				/>
				<GestureHandlerRootView style={styles.rootView}>
					<AppNavigator />
				</GestureHandlerRootView>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default RootContainer
