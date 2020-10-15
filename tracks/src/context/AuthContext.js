import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error': 
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { token: action.payload, errorMessage: '' };
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		// make api request to sign up with that email and password
		try {
			const response = await trackerApi.post('/signup', { email, password });
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signup', payload: response.data.token });

			// navigate to main flow
			navigate('TrackList');

		} catch (err) {
			dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
		}
	};
};

const signin = (dispatch) => {
	return ({ email, password }) => {
		// try to signin
		// handle success by updating state
		// handle failure by showing error message (somehow)
	};
};

const signout = (dispatch) => {
	return () => {
		// somehow sign out
	};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{ token: null, errorMessage: '' }
);