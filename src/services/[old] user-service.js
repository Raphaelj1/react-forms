import apiClient from './api-client';

class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get('/users', { signal: controller.signal });
        return {request, cancel: () => controller.abort()}
	}

    createUser(user){
        return apiClient.post(`/users/`, user)
    }

    deleteUser(id){
        return apiClient.delete(`/users/${id}`)
    }

    updateUser(user){
        return apiClient.patch(`/users/${user.id}`, user)
    }

    
}

export default new UserService();