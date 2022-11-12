import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    useEffect(() => {
        const getToken = async () => {
            const url = 'https://warehouse-management-api.onrender.com/login';
            if (email) {
                const { data } = await axios.post(url, { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);

    return [token];
};

export default useToken;