import axios from "axios";


let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'cc4cd378-9de6-4087-b594-6c01a4372074'
    }
});



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    changeNumberPage(pageNumber: number, pageSize: number) {
        return axiosInstance.get(`users?page=${pageNumber}&count=${pageSize}`);
    },
    followUser(id: number) {
        return axiosInstance.post(`follow/${id}`);
    },
    unfollowUser(id: number) {
        return axiosInstance.delete(`follow/${id}`);
    },
    getUserProfile(id: number) {
        console.warn('This method is relocate to "profileAPI".')
        return profileAPI.getUserProfile(id);
    }
}

export const profileAPI = {
    getUserProfile(id: number) {
        return axiosInstance.get(`profile/${id}`);
    },
    getStatusProfile(id: number) {
        return axiosInstance.get(`profile/status/${id}`)
    },
    updateStatusProfile(status: string) {
        return axiosInstance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    auth() {
        return axiosInstance.get(`auth/me`);
    },
    login(email: string | null, password: string | null, rememberMe: boolean = false) {
        return axiosInstance.post('/auth/login', {email, password, rememberMe});
    },
    logout() {
        return axiosInstance.delete('/auth/login');
    }
}

export const weatherAPI = {
    getWeather(city: string) {
        //return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=17aace2073b8f40a5f7204cd838a2ae4&units=metric`);
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17aace2073b8f40a5f7204cd838a2ae4&units=metric`);
    }
}