import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Friend #1' },
		{ name: 'Friend #2' },
		{ name: 'Friend #3' },
		{ name: 'Friend #4' },
		{ name: 'Friend #5' },
		{ name: 'Friend #6' },
		{ name: 'Friend #7' },
		{ name: 'Friend #8' },
		{ name: 'Friend #9' }
	];

	return (
		<FlatList
			keyExtractor={friend => friend.name} 
			data={friends} 
			renderItem={({ item }) => {
				// element === { item: { name: 'Friend #1' }, index: 0 }
				// element is an object with information
				// so instead of element we can replace it with { item }
				// gives a direct reference to the item property
				return <Text style={styles.textStyle}>{item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;

// FlatFlist Element
// 1) Turn an array into a list of elements
// 2) required to pass in a 'prop' of 'data'
//  a) the array of data
// 3) required to pass in a 'rendered' prop 
//  a) function that will turn each individual item into an element
// 4) React on web - 'mapping' | React on mobile - FlatList