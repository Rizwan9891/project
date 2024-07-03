import axios from 'axios';

export const APIRequest = (config = {}) => {
    return new Promise((resolve, reject) => {
        let data = {
            method: config.method,
            url: config.url,
            data: config.body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        axios(data).then(response => {
            console.log("response", response.data)
            if (response?.data) {
                resolve(response?.data);
            } else {
                reject(response?.data ? response.data : response);
            }
        }).catch((error) => {
            console.log("Server responded with error status:", error.response.status);
            console.log("Error data:", error?.response?.data?.message);
            reject(error?.response?.data?.message);
        });
    });
};
