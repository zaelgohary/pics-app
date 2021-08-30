import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization : 'Client-ID d_heeY0PrelhUsRUoNs_snZQ1nsiZwGLwB8XbMI_rLk'
    }
});