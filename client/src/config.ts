const baseUrl = import.meta.env.VITE_API_URL;

const fetchData = async(url: string, method: string, data:any = null, headers:any = null)=>{
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    };
    
    if(method !== 'GET' && method !== 'HEAD' && data){
        options.body = JSON.stringify(data);
    }

    const res = await fetch(`${baseUrl}${url}`, options);
    const resData = await res.json();

    return {status: res.status, data: resData};
};

export {fetchData};