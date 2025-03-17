import api from "../api";


const AuthService = {
    async register (username,email,password1,password2){
        try {
            const response = await api.post('dj-rest-auth/registration/', {
                username,
                email,
                password1,
                password2
            });
            return {
                sucess : true,
                data : response.data,
                message : 'User registered successfully'
            };
        } catch (error) {
            return {
                sucess : false,
                data : error.response.data,
                message : 'User registration failed'
            };
        }

    },

    async login (email,password) {
        try{
            const response = await api.post("dj-rest-auth/login/",{
                email,
                password
            });
            if (response.data.access){
                localStorage.setItem("token", response.data.access);
                localStorage.setItem("refreshToken", response.data.refresh);
            }
            return{
                sucess : true,
                data : response.data,
                message : 'User logged in successfully'

            }

        }
        catch(error){
            return {
                sucess : false,
                data : error.response.data,
                message : 'User login failed'
            }
        }

    },

    async verifyemail (key) {
        try{
            const response = await api.post('dj-rest-auth/registration/account-confirm-email/',{
                key
            });
            return{
                sucess : true,
                data : response.data,
                message : 'Email verified successfully'

            }

        }
        catch(error){
            return {
                sucess : false,
                data : error.response?.data,
                message : 'Email verification failed'
            }
        }

    },

    async passwrd_reset(email){
        try{
        const response = await api.post('dj-rest-auth/password/reset/',{email});
        return {
            sucess : true,
            data : response.data,
            message : 'Password reset email sent. Please check your inbox.'

        }
        }
        catch(error){
            return {
                sucess : false,
                data : error.response?.data,
                message : error.response?.data?.detail || 'Failed to send password reset email'
            }
        }
    },
    
    async passwrd_reset_confirm(uid,token,password1,password2){
        try{
            const response = api.post('dj-rest-auth/password/reset/confirm/',{
                uid,
                token,
                password1,
                password2
            });
            return{
            sucess : true,
            data : response.data,
            message : "Password reset was successful!"

            }

        }
        catch(error){
            return{
                sucess : false,
                data : error.response?.data,
                message : error.response?.data?.detail || 'Failed reset password'
            }

        }
    },

};

export default AuthService;