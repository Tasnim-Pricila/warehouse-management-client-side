import { useEffect, useState } from 'react';

const useCars = (url) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res =>res.json())
            .then(data => {
                setCars(data.data)
                setLoading(!loading);
            })
    },[url])
    
    return [cars, setCars, loading, setLoading];
};

export default useCars;