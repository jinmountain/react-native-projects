import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer BkjTo_5NiF8kBdk0rwfn7jheYwgA6XBKxunN08TXdNj6CZ7Muo7FhOzTJPktwjVclaElVO1_EYhCBk0TpJHS1dMuiHHfbT1c2VIQLtesKsuK7zJaGJtZG8ORZDN2X3Yx'
	}
});

