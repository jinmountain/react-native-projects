import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.parentStyle}>
			<Text style={styles.viewOneStyle}> Child #1 </Text>
			<Text style={styles.viewTwoStyle}> Child #2 </Text>
			<Text style={styles.viewThreeStyle}> Child #3 </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	parentStyle: {
		borderWidth: 3,
		borderColor: 'black',
		height: 200,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	viewOneStyle: {
		height: 50,
		width: 50,
		backgroundColor: 'red',
		alignSelf: 'flex-start'
	},
	viewTwoStyle: {
		height: 50,
		width: 50,
		backgroundColor: 'green',
		alignSelf: 'flex-end'
	},
	viewThreeStyle: {
		height: 50,
		width: 50,
		backgroundColor: 'purple'
	}
});

export default BoxScreen;