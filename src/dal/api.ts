import axios from "axios";


let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'cc4cd378-9de6-4087-b594-6c01a4372074'
    }
})

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
        return axiosInstance.get(`profile/${id}`);
    }
}

export const authAPI = {
    auth() {
        return axiosInstance.get(`auth/me`);
    }
}