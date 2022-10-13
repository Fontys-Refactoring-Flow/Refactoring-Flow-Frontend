import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {HtmlAttributes} from "csstype";

const PrivateRoute = ({children} : any) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        if(!auth?.loading && !auth?.hasStudentAuth()) {
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

export default PrivateRoute