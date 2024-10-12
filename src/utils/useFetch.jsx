
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useAxiosFetch = ( end_point , refresh=null ) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const Auth = useSelector(state => state.Auth);

    if( Auth.loading && !Auth.token ){
        return { data, loading, error };
    }
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios({
                    url: import.meta.env.VITE_API_URL + end_point,
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + Auth.token, // Pass token here
                    },
                });
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [end_point , refresh]);

    return { data, loading, error }
}

export default useAxiosFetch;
