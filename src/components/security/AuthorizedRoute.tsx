import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const AuthorizedRoute = ({children} : HTMLElement) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        if(!auth?.loading && !auth?.hasAdminAuth()) {
            navigate("/login")
        }

        setLoading(false)
    }, [auth, navigate])

    return (
        <>
            {(!loading) &&
                [children]
            }
        </>
    )
}

export default AuthorizedRoute