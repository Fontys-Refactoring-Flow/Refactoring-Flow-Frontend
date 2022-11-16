import {axiosInstance} from "../../../../services/axios.service";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const GitHubCallback = () => {
    const [params] = useSearchParams()

    useEffect(() => {
        axiosInstance.post(`/github/callback?code=${params.get("code")}`).then()
    })

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}

export default GitHubCallback