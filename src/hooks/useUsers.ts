import { useState, useEffect } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>();
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const { request, cancel } = userService.getAll<User>();
		request
			.then(({ data: fetchedUsers }) => {
				setUsers(fetchedUsers);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				if (err instanceof CanceledError) return;
				setErrors(err);
			});

		return () => cancel();
	}, []);

	return { users, errors, isLoading, setUsers, setErrors };
};

export default useUsers;
