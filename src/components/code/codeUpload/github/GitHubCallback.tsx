import {axiosInstance} from "../../../../services/axios.service";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const GitHubCallback = () => {
    const { code } = useParams()

    useEffect(() => {
        axiosInstance.post(`/github/callback?code=${code}`).catch()
    })

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}

export default GitHubCallback