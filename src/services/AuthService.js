import axiosInstance from "../utils/axiosUtil.js";

class AuthService{
    login(user){
        try {
            return axiosInstance.post('users/login', {
                username: user.username,
                password: user.password
            }).then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("user", response.data);
                    localStorage.setItem("token", response.data.token);
                }
                return response.data;
            });
        }catch (error){
            console.error(error);
        }
    }


}
export default new AuthService();