import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    useEffect(() => {
        const getToken = async () => {
            const url = 'https://aqueous-castle-23804.herokuapp.com/login';
            if (email) {
                const { data } = await axios.post(url, { email })
                console.log(data);
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }

        }
        getToken();
    }, [user]);

    return [token];
};

export default useToken;