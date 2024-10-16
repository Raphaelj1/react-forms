import axios from 'axios';
import { useEffect, useState } from 'react';

const fetch = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState([]);
	useEffect(() => {
		const controller = new AbortController();
		axios
			.get('url', { signal: controller.signal })
			.then((res) => setData(res.data))
			.catch((err) => {
				console.log(err);
				// check if error is from CanceledError
				// CanceledError is from the axios module
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { fetch, data, error };
};

export default fetch;

