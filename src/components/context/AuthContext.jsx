import {createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance, axiosInstancePublic} from "../../services/axios.service";
import SessionHandler from "../../SessionHandler/SessionHandler";

const AuthContext = createContext(null)
const useAuth = () => {
    return useContext(AuthContext)
}

export {useAuth}

export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    let [student, setStudent] = useState("")
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setStudent(sessionStorage.getItem("user") || "")
        const interval = setInterval(() => {
            if(student === "" || student === "{}") return
            refresh(JSON.parse(student).refreshToken).catch(() => {
                navigate("/login")
            })
        }, 300000)
        setLoading(false)
        return () => clearInterval(interval)
    }, [student, navigate])

    const hasAdminAuth = () => {
        return hasAuth("ADMIN")
    }

    const hasUserAuth = () => {
        return hasAuth("USER")
    }

    const hasAuth = (auth) => {
        if(student === "" || student === "{}") return false;
        try {
            const authorities = JSON.parse(student).authorities
            return authorities.includes(auth)
        } catch(e) {
            return false
        }
    }

    const login = async (email, password) => {
        setLoading(true);
        const data = {
            "email": email,
            "password": password
        }

        const formBody = Object.entries(data).map(([key, value]) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')

        return axiosInstancePublic
            .post('/student/login', formBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                if(res.data.accessToken) {
                    sessionStorage.setItem("user", JSON.stringify(res.data))
                    SessionHandler.setStudentId(res.data.id)
                    setStudent(res.data)
                }
                setLoading(false)
            })
    }

    const refresh = (refreshToken) => {
        setLoading(true);
        return axiosInstancePublic
            .post('refresh', {
                refreshToken
            })
            .then((res) => {
                if(res.data.accessToken && res.data.refreshToken) {
                    let user = JSON.parse(sessionStorage.getItem("user") || '{}')
                    if(user.accessToken && user.refreshToken) {
                        user.accessToken = res.data.accessToken
                        user.refreshToken = res.data.refreshToken
                        sessionStorage.setItem("user", JSON.stringify(user))
                        setStudent(JSON.stringify(user))
                    }
                }
                setLoading(false)
                return res.data.accessToken
            })
    }

    const register = (username, email, password) => {
        setLoading(true);
        const data = {
            "username": username,
            "email": email,
            "password": password
        }

        const formBody = Object.entries(data).map(([key, value]) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')

        return axiosInstancePublic
            .post('/student/register', formBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(() => {
                setLoading(false)
            })
    }

    const logout = () => {
        setLoading(true);
        setStudent("");
        sessionStorage.removeItem('user')
        navigate("/")
        setLoading(false);
    }

    let contextData = {
        user: student,
        setUser: setStudent,
        login,
        refresh,
        register,
        logout,
        hasAuth,
        hasAdminAuth,
        hasUserAuth,
        loading
    }

    axiosInstance.interceptors.request.use(
        async config => {
            const keys = JSON.parse(sessionStorage.getItem('user') || '{}')
            if(!keys.accessToken || !keys.refreshToken) navigate("/login")
            config.headers.Authorization = `${keys.tokenType} ${keys.accessToken}`
            return config;
        },
        error => {
            Promise.reject(error).catch()
        }
    );

    axiosInstance.interceptors.response.use(async function(response) {
        return response
    }, async function (error) {
        setLoading(true);
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== "refresh") {
            originalRequest._retry = true;
            const user = JSON.parse(sessionStorage.getItem('user') || '{}')
            refresh(user.refreshToken).then((token) => {
                axiosInstance.defaults.headers.common['Authorization'] = `${user.tokenType} ${token}`;
                return axiosInstance.request(originalRequest);
            }).catch(() => {
                navigate("/login")
            })
        }
        setLoading(false);
        return Promise.reject(error);
    });

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}