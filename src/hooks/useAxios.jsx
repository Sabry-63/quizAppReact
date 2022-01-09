import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://opentdb.com";

const Useaxios = ({ url }) => {
    const [respons, setRespons] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fatchData = () => {
            axios
                .get(url)
                .then((res) => setRespons(res.data))
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
        };
        fatchData();
    }, [url]);

    return { respons, error, loading };
};

export default Useaxios;
