import {createContext, Dispatch, HTMLAttributes, SetStateAction, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance, axiosInstancePublic} from "../../services/axios.service";
import {AxiosResponse} from "axios";
import {UserAuthType} from "../../types/UserTypes";

type AuthContextType = {
    student: UserAuthType | null
    setStudent?: Dispatch<SetStateAction<UserAuthType | null>>
    login: (name: string, password: string) => Promise<AxiosResponse | void>
    refresh: (refreshToken : string) => Promise<AxiosResponse | void>
    register: (name : string, email : string, password : string) => Promise<AxiosResponse | void>
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
    let [student, setStudent] = useState<UserAuthType | null>(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if (student === null) return
            refresh(student!.refreshToken).catch()
        }, 300000)

        setLoading(false)
        return () => clearInterval(interval)
    }, [navigate])

    const hasAdminAuth = () => {
        return hasRole("ADMIN")
    }

    const hasStudentAuth = () => {
        return hasRole("STUDENT")
    }

    const hasRole = (auth: string) => {
        if(student === null) return false;
        try {
            const authorities = student.authorities
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
                    localStorage.setItem("student", JSON.stringify(res.data))
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
                if (res.data.accessToken && res.data.refreshToken) {
                    if (student!.accessToken && student!.refreshToken) {
                        student!.accessToken = res.data.accessToken
                        student!.refreshToken = res.data.refreshToken
                        localStorage.setItem("student", JSON.stringify(student))
                        setStudent(student)
                    }
                }
                setLoading(false)
            }).catch(() => {
                logout()
                setLoading(false)
            })
    }

    const register = (name : string, email : string, password : string) => {
        setLoading(true);
        const data = {
            "name": name,
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
        setStudent(null);
        localStorage.removeItem("student")
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
            const keys = JSON.parse(localStorage.getItem('student') || '{}')
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
        if(error.response === undefined) {
            logout()
            return
        }

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== "refresh") {
            originalRequest._retry = true;
            const user = JSON.parse(localStorage.getItem('student') || '{}')
            refresh(user.refreshToken).then((token) => {
                originalRequest.headers.Authorization = `${user.tokenType} ${token}`;
                return axiosInstance.request(originalRequest);
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