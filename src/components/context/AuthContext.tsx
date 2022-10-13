import {createContext, Dispatch, HTMLAttributes, SetStateAction, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance, axiosInstancePublic} from "../../services/axios.service";
import {AxiosResponse} from "axios";

type AuthContextType = {
    student: string | null
    setStudent?: Dispatch<SetStateAction<string>>
    login: (username: string, password: string) => Promise<AxiosResponse | void>
    refresh: (refreshToken : string) => Promise<AxiosResponse | void>
    register: (username : string, email : string, password : string) => Promise<AxiosResponse | void>
    logout: () => void
    hasAuth: (auth : string) => boolean
    hasAdminAuth: () => boolean
    hasStudentAuth: () => boolean
    loading: boolean
}


const AuthContext = createContext<AuthContextType | null>(null)
export default AuthContext

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children} : HTMLAttributes<any>) => {
    const navigate = useNavigate()
    let [student, setStudent] = useState("")
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setStudent(sessionStorage.getItem("student") || "")
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
        return hasRole("ADMIN")
    }

    const hasStudentAuth = () => {
        return hasRole("STUDENT")
    }

    const hasRole = (auth: string) => {
        if(student === "" || student === "{}") return false;
        try {
            const authorities = JSON.parse(student).authorities
            return authorities.includes("ROLE_" + auth)
        } catch(e) {
            return false
        }
    }

    const login = async (email: string, password: string) => {
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
                    sessionStorage.setItem("student", JSON.stringify(res.data))
                    setStudent(res.data)
                }
                setLoading(false)
            })
    }

    const refresh = (refreshToken : string) => {
        setLoading(true);
        return axiosInstancePublic
            .post('refresh', {
                refreshToken
            })
            .then((res) => {
                if(res.data.accessToken && res.data.refreshToken) {
                    let user = JSON.parse(sessionStorage.getItem("student") || '{}')
                    if(user.accessToken && user.refreshToken) {
                        user.accessToken = res.data.accessToken
                        user.refreshToken = res.data.refreshToken
                        sessionStorage.setItem("student", JSON.stringify(user))
                        setStudent(JSON.stringify(user))
                    }
                }
                setLoading(false)
                return res.data.accessToken
            })
    }

    const register = (username : string, email : string, password : string) => {
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
        sessionStorage.removeItem("student")
        setLoading(false);
        return navigate("/login")
    }

    let contextData : AuthContextType = {
        student,
        setStudent,
        login,
        refresh,
        register,
        logout,
        hasAuth: hasRole,
        hasAdminAuth,
        hasStudentAuth,
        loading
    }

    axiosInstance.interceptors.request.use(
        async config => {
            const keys = JSON.parse(sessionStorage.getItem('student') || '{}')
            if(!keys.accessToken || !keys.refreshToken) navigate("/login")
            config.headers!.Authorization = `${keys.tokenType} ${keys.accessToken}`
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
            const user = JSON.parse(sessionStorage.getItem('student') || '{}')
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