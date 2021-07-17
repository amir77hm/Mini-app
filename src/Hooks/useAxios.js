import { useState, useEffect } from "react";
import axios from 'axios'

const BASE_URL = 'https://dummyapi.io/data/api'

const APP_ID = '60f2ab5b5461cb21086e1eb4'

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = (params) => {
        setTimeout(async () => {
            // try {
            await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
                .then(({ data }) => setResponse(data.data))
                .catch(setError(error))
                .finally(() => setLoading(false));
            // } catch (error) {
            // setError(error)
            // } finally {
            // setLoading(false)
            // }
        }, 2000);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { response, error, loading }
}