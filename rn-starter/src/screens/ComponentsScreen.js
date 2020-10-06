// 1) Import Libaries we need to create a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// 2) Create a component - a function that returns some JSX
const ComponentsScreen = () => {
	const greeting = <Text>Hello to you!</Text>;
	const username = <Text>Jinsan Kim</Text>;

	return (
		<View>
			<Text style={styles.textStyle}>This is the components screen</Text>
			{greeting}
			<Text style={styles.subHeaderStyle}>My name is {username}</Text>
		</View>
	);
};

// 3) Create a stylesheet 
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 40
	},
	subHeaderStyle: {
		fontSize: 20
	}
});

// 4) Export the component so we can use it elsewhere in out project
export default ComponentsScreen;